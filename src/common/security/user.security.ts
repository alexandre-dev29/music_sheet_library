import { AuthorizableUser } from 'nest-casl';
import { Role } from '@/music_sheet/common/security/role';

export class UserSecurity implements AuthorizableUser<Role, string> {
  id: string;
  name?: string;
  roles: Array<Role>;
  isSuperAdmin: boolean;
  phoneNumber?: string;
}
