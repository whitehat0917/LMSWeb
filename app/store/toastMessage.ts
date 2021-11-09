import { atom } from 'recoil';

export const toastMessagesList = atom({
  key: 'toastMessagesList',
  default: [],
});
