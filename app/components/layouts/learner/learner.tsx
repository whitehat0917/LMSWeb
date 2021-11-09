/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import HeaderLyt from './header';
import FooterLyt from './footer';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    marginTop: '64px',
    backgroundColor: '#f7f8fb',
    minHeight: '100vh',
    paddingBottom: '60px',
  },
  footer: {
    position: 'fixed',
    width: '100%',
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
}));
export default function PocLayout({ children }) {
  const authnInfo = useRecoilValue(authnState);
  const classes = useStyle();
  useEffect(() => {
    if (!authnInfo.isAuthenticate && !authnInfo.userInfo) {
      return;
    }
  }, []);

  return (
    <>
      <header>
        <HeaderLyt />
      </header>
      <main className={classes.root}>{children}</main>
      <footer className={classes.footer}>
        <FooterLyt />
      </footer>
    </>
  );
}
