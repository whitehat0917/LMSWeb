export class IdmSignUp {
  roleCode: number;
  email: string;
  password: string;
}
export class SignUpIdmDto {
  idm: IdmSignUp;
  user: {
    firstName: string;
    lastName: string;
  };
}

export class IdmSignUpForm {
  firstName: string;
  lastName: string;
  purpose: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  acceptTerms: boolean;
}

export interface IdmRespone {
  access_token: string;
  status: string;
  passwordExpired?: string;
  shouldResetPassword?: boolean;
}

export enum RoleCode {
  ADMINISTRATOR = 5900,
  SUBSCRIBER = 2002,
  INTERNAL = 2102,
  GUEST = 1101,
}

export const userTypeLabels: Record<string, string> = {
  STUDENT: 'Learner',
  OWNER: 'Owner',
  ADMINISTRATOR: 'Admin',
  TEACHER: 'Educators',
};
