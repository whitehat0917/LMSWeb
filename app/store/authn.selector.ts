import { decodeToken } from '@util/msal-app.conifg';
import { selector } from 'recoil';
import api from '../api/RestClient';
import { authnState, authDefaultValue, AuthnInfoState } from './authn.state';

export const authnQuery = selector<AuthnInfoState>({
  key: 'authnStateQuery',
  get: async ({ get }) => {
    const userInfo = get(authnState);
    if (userInfo) {
      return userInfo;
    }
    const auth = decodeToken();
    if (auth) {
      const response = await api.post('userManagement/signIn', {
        email: auth.email,
        uid: auth.uid,
      });
      return {
        userInfo: response.data,
        isAuthenticate: true,
        userLogIn: () => {
          window.location.href = '/';
        },
        userLogOut: () => {
          window.location.href = '/';
        },
      };
    } else {
      return authDefaultValue;
    }
  },
  set: ({ set }, newValue) =>
    set(authnState, !newValue ? authDefaultValue : newValue),
});
