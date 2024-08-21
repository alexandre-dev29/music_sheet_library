import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterCommand } from '../../Commands/Register/RegisterCommand';
import { RegisterUserDto } from '../dto/registerUserDto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/music_sheet/prisma.service';
import { ConfigService } from '@nestjs/config';
import { LoginUserDto } from '@/music_sheet/auth/Common/dto/LoginUserDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async validateUser(phoneNumber: string, password: string): Promise<boolean> {
    const user = await this.prismaService.user.findUnique({
      where: { phoneNumber },
    });

    if (!user) {
      return false;
    }

    return await bcrypt.compare(password, user.password);
  }

  async registerNewUser(
    registerData: RegisterCommand,
  ): Promise<RegisterUserDto> {
    // check if user with this phone number already exists
    const existingUser = await this.prismaService.user.findUnique({
      where: { phoneNumber: registerData.phoneNumber },
    });

    // if user already exists, return null or handle however you'd like
    if (existingUser) {
      throw new Error('User already exists');
    }

    // if user does not already exist, proceed with creation of new user
    const newUser = await this.prismaService.user.create({
      data: {
        name: registerData.name,
        biography: '',
        phoneNumber: registerData.phoneNumber,
        password: bcrypt.hashSync(registerData.password, 10),
      },
    });

    // return the newly-created user
    return { ...newUser } as RegisterUserDto;
  }

  async loginUser(
    phoneNumber: string,
    password: string,
  ): Promise<LoginUserDto> {
    // Validate user's credentials
    const isValid = await this.validateUser(phoneNumber, password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid login credentials');
    }

    // If user is valid, get the user
    const user = await this.prismaService.user.findUnique({
      where: { phoneNumber },
    });

    // Generate the authentication token
    const token = this.jwtService.sign(
      {
        phoneNumber: user.phoneNumber,
        name: user.name,
      },
      { secret: this.configService.get<string>('JWT_SECRET_SECRET_KEY') },
    );

    return { accessToken: token, name: user.name, phoneNumber };
  }
}
