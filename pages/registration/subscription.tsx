import React, { useEffect } from 'react';
import IndexView from '@module/admin/billing/YourPlan';
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