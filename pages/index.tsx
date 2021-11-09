import React, { useEffect } from 'react';
import { authnState } from 'store';
import { useRecoilState } from 'recoil';
import LoadingView from '@module/elements/loading/loading-view';
import { Authentication } from '@lms-api/services';
import { GlobalUrls, redirectErrorRoute, redirectRoute } from '@util/app-utils';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

export default function index() {
  const [authn, setAuthn] = useRecoilState(authnState);
  const router = useRouter();

  useEffect(() => {
    async function redirect() {
      try {
        const { authn, accountInfo } = await Authentication.refreshAuthnUser();
        const route = redirectErrorRoute(authn.error);
        if (route) {
          router.push(route);
        }
        setAuthn(authn);
        if (authn.userInfo && authn.isAuthenticate) {
          const url = redirectRoute(authn.userInfo);
          router.push(url);
        }
        if (!accountInfo) {
          router.push(GlobalUrls.SIGNIN);
        }
      } catch (error) {
        setAuthn({...authn, error: error.message, isAuthenticate: false, userInfo: null });
      }
    }
    redirect();
  }, []);

  if (authn.error) {
    return (<div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      height: '100vh',
      backgroundColor: 'white',
    }}>
      <h3 style={{ marginBottom: '30px' }}>An error occurred on server!</h3>
      <p>{authn.error}</p>
      <Button
          variant="contained"
          color="primary"
        type="submit"
        style={{ 'marginTop': '20px', width: '240px'}}
          onClick={() => router.push(GlobalUrls.SIGNIN)}
        >
          Back to Log In
        </Button>
    </div>);
  }
  return <LoadingView />;
}
