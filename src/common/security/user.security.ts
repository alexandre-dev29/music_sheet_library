import { AuthorizableUser } from 'nest-casl';
import { Roles } from '@/music_sheet/types/@generated';

export class UserSecurity implements AuthorizableUser<Roles, string> {
  id: string;
  name?: string;
  roles: Array<Roles>;
  isSuperAdmin: boolean;
  phoneNumber?: string;
}
