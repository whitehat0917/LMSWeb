import jwt_decode from 'jwt-decode';

export const msalAuthConfig = {
  tokenKey: '_lmsToken',
  emailKey: '_tempEmail',
};

export interface AzureUser {
  email: string;
  uid: string;
  role?: string;
  userId?: string;
}

export const decodeToken = () => {
  const token = sessionStorage.getItem(msalAuthConfig.tokenKey);
  if (!token) {
    return;
  }
  const decodedToken = jwt_decode(token) as any;
  const expDt = new Date(Number(decodedToken.exp) * 1000);

  if (expDt.getTime() < new Date().getTime()) {
    sessionStorage.removeItem(msalAuthConfig.tokenKey);
    return;
  }

  return {
    email: decodedToken.email,
    uid: decodedToken.uid,
    role: decodedToken.urt,
  } as AzureUser;
};
