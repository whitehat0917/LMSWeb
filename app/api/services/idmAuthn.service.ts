import api from '../RestClient';
import { IdmRespone, SignUpIdmDto } from '@lms-api/models/idm.model';
import { ApiResponse, mapResponse } from '@lms-api/models';

export class IdmAuthnService {
  constructor() {}

  public static async signIn(
    email: string,
    password: string
  ): Promise<ApiResponse<IdmRespone>> {
    const response = await api.post('idAccessManagement/signIn', {
      email,
      password,
    });
    return mapResponse<IdmRespone>(response);
  }

  public static async signUp(data: SignUpIdmDto): Promise<ApiResponse<IdmRespone>> {
    const response = await api.post('idAccessManagement/signUp', data);
    return mapResponse<IdmRespone>(response);
  }

  public static async resetPassword(email: string): Promise<ApiResponse<IdmRespone>> {
    const response = await api.post('userManagement/resetPassword/' + email, null);
    return mapResponse<IdmRespone>(response);
  }
  
  public static async changePassword(payload: {email: string, oldPassword: string, newPassword: string}): Promise<ApiResponse<IdmRespone>> {
    const response = await api.post('userManagement/changePassword', payload);
    return mapResponse<IdmRespone>(response);
  }
}
