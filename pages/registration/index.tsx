import React, { useEffect } from 'react';
import IndexView from '@module/registration/index';
import { decodeToken } from '@util/msal-app.conifg';

export default function index() {
  useEffect(() => {
    const auth = decodeToken();
    if (auth) {
      console.log(auth.role);
    } else {
      window.location.href = '/';
    }
  }, []);

  return <IndexView />;
}
