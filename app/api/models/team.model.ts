import { BaseDto } from './base-dto';

export class Team extends BaseDto {
  name: string;
  organizationId: string;
  users: UserTeam[];
}

export class UserTeam {
  id: string;
  teamId: string;
  team?: Team;
  userId: string;
  fullName: string;
  email: string;
}
