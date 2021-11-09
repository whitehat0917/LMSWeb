import { Address } from './address.model';

export class UserInfo {
  id?: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  homeNumber: string;
  businessNumber: string;
  mobileNumber: string;
  organizationId: string;
  organization: Organization;
  uid: string;
  type: string;
  avatar: string;
  active: boolean;
  addresses: Address[];
}
export class Organization {
  id?: string;
  name: string;
  description: string;
  phoneNumber: string;
  users?: UserInfo[];
  subscription?: SubscriptionDto
}

export class SubscriptionDto {
  id?: string;
  organizationId?: string;
  createdBy?: string;
  createdAt?: string;
  updatedBy?: string;
  updatedAt?: string;
  plan?: string;
  cost?: number;
  status?: string;
  paymentType?: string;
  expirationDate?: string;
  organization: Organization;
}

export enum AccountStatus {
  ADMINISTRATOR = 'ADMINISTRATOR',
  OWNER = 'SUBSCRIBER',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  GUEST = 'GUEST',
}

export const userTypeLabels: Record<string, string> = {
  STUDENT: 'Learner',
  OWNER: 'Owner',
  ADMINISTRATOR: 'Admin',
  TEACHER: 'Educator',
};

export const userStatus = [
  {
    label: 'Active',
    value: true,
  },
  {
    label: 'Inactive',
    value: false,
  },
];

export interface UserSignUp {
  organization: {
    name: string;
    description: string;
    phoneNumber: string;
  };
  userInfo: {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    type?: string;
    homeNumber: string;
    businessNumber: string;
    mobileNumber: string;
  };
  address?: Address;
}

export class NewUserDto {
  roleCode: number;
  userInfo: {
    id?: string;
    organizationId: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    homeNumber?: string;
    businessNumber?: string;
    mobileNumber: string;
  };
  address?: Address;
}