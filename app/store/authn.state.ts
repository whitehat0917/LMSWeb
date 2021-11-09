
import { SubscriptionDto, UserInfo } from '@lms-api/models';
import { Survey } from '@lms-api/models/survey.model';
import { AzureUser } from '@util/msal-app.conifg';
import { atom } from 'recoil';

export interface AuthnInfoState {
  userInfo: UserInfo;
  isAuthenticate: boolean;
  error?: string;
  userLogIn: () => void;
  userLogOut: () => void;
}

export const authDefaultValue = <AuthnInfoState>{
  userInfo: null,
  isAuthenticate: false,
  error: null,
  userLogIn: () => {
    window.location.href = '/';
  },
  userLogOut: () => {
    window.location.href = '/';
  },
};

export const authnState = atom({
  key: 'authnState',
  default: authDefaultValue,
});

export const signUpStepState = atom<{
  step: number;
  currentUser: AzureUser;
  items: {
    id: number;
    title: string;
    complete: boolean;
    active: boolean;
  }[];
}>({
  key: 'signUpStepState',
  default: {
    step: 2,
    currentUser: null,
    items: [
      {
        id: 1,
        title: 'Basic Details',
        complete: true,
        active: true,
      },
      {
        id: 2,
        title: 'Business Information',
        complete: false,
        active: false,
      },
      {
        id: 3,
        title: 'Additional Questions',
        complete: false,
        active: false,
      },
    ],
  },
});

export const userInfoFormState = atom<{
    user: UserInfo;
    subscription: SubscriptionDto;
}>({
  key: 'userInfoFormState',
  default: null,
});

export const userSurveyFormState = atom<Survey>({
  key: 'userSurveyFormState',
  default: null,
});

export const loginFormState = atom<{ email: string; password: string }>({
  key: 'loginFormState',
  default: null,
});
