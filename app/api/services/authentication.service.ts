import { Address } from '@lms-api/models/address.model';
import { AzureUser, decodeToken, msalAuthConfig } from '@util/msal-app.conifg';
import { NewUserDto, SubscriptionDto, UserInfo, UserSignUp } from '../models/user-info.model';
import { Survey } from '../models/survey.model';
import api from '../RestClient';
import { ApiResponse, mapResponse } from '@lms-api/models';

export class Authentication {
  constructor() {}

  public static async signIn(email: string, uid: string): Promise<ApiResponse<UserInfo>> {
    const response = await api.post<UserInfo>('userManagement/signIn', {
      email,
      uid,
    });
    return mapResponse<UserInfo>(response);
  }
  

  public static async registration(data: UserSignUp): Promise<ApiResponse<UserInfo>> {
    const response = await api.post<UserInfo>('userManagement/signUp', data);
    return mapResponse<UserInfo>(response);
  }

  public static async signUpAndUpdate(data: UserSignUp): Promise<ApiResponse<{
    user: UserInfo;
    subscription: SubscriptionDto;
}>> {
    const response = await api.post('userManagement/signUpUpdate', data);
    return mapResponse<{
    user: UserInfo;
    subscription: SubscriptionDto;
}>(response);
  }

  public static async addNewUser(data: NewUserDto): Promise<ApiResponse<UserInfo>> {
    const response = await api.post('userManagement/addUser', data);
    return mapResponse<UserInfo>(response);
  }

  public static async addAddress(data: Address): Promise<ApiResponse<Address>> {
    const response = await api.post<Address>('address', data);
    return mapResponse<Address>(response);
  }

  public static async saveSurvey(data: Survey, isNew = false): Promise<ApiResponse<Survey>> {
    let response = null;
    if (data.id && !isNew) {
      response = await api
        .put<Survey>('userManagement/updateUserSurvey/' + data.id, data);
    } else {
      response = await api
        .post<Survey>('userManagement/addUserSurvey', data);
    }
    return mapResponse<Survey>(response);
  }

  public static getCurrentADUser(): AzureUser {
    return decodeToken();
  }

  public static async refreshAuthnUser() {
    const auth = decodeToken();
    if (auth) {
      const response = await Authentication.signIn(auth.email, auth.uid);
      return {
        accountInfo: auth,
        authn: {
          userInfo: response.data,
          isAuthenticate: !!response.data,
          error: response.error,
          userLogIn: async () => {
            window.location.href = '/login';
          },
          userLogOut: async () => {
            sessionStorage.removeItem(msalAuthConfig.tokenKey);
            window.location.href = '/';
          },
        },
      };
    }
    return {
      accountInfo: null,
      authn: {
        userInfo: null,
        isAuthenticate: false,
        error: null,
        userLogIn: async () => {
          window.location.href = '/login';
        },
        userLogOut: async () => {
          sessionStorage.removeItem(msalAuthConfig.tokenKey);
          window.location.href = '/';
        },
      },
    };
  }
}
