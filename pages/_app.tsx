import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core';
import AdminLayout from '@layout/admin/Layout';
import StudentLayout from '@layout/learner/learner';
import SignUpLayout from '@layout/signup/index';
import SignInLayout from '@layout/signin/index';
import { getLayoutRoute, LayoutRoute } from '@util/app-utils';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import IndexPage from './index';
import LogOutPage from './logout';
import { RecoilRoot } from 'recoil';
import 'video-react/dist/video-react.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import 'video-react/styles/scss/video-react.scss';
import 'styles/base/_base.scss';
import 'styles/react-tabs.scss';
import 'styles/styles.scss';
import { lmsStyle } from '../app/styles/ui.variables';
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: process.env.NODE_ENV === 'production',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#006DFF',
    },
    secondary: {
      main: '#D0415A',
    },
    warning: {
      main: '#E29270',
    },
  },
  typography: {
    fontFamily: ['Inter-Regular', 'sans-serif'].join(','),
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiInputBase: {
      root: {
        fontSize: '15px',
        color: lmsStyle['base-gray-500'],
      },
    },
    MuiTabs: {
      indicator: {
        height: '3px',
      },
    },
    MuiTab: {
      root: {
        '&:hover': {
          color: lmsStyle['base-secondary'],
          fontWeight: '600',
        },
        '&$selected': {
          color: lmsStyle['base-secondary'],
          fontWeight: '600',
          '&:hover': {
            color: lmsStyle['base-secondary'],
          },
        },
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
      },
    },
  },
});

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const LandingLyt = () => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  };

  const PocLyt = () => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StudentLayout>
          <Component {...pageProps} />
        </StudentLayout>
      </ThemeProvider>
    );
  };

  const SignUpLyt = () => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignUpLayout>
          <Component {...pageProps} />
        </SignUpLayout>
      </ThemeProvider>
    );
  };

  const SignInLyt = () => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SignInLayout>
          <Component {...pageProps} />
        </SignInLayout>
      </ThemeProvider>
    );
  };

  const AdminLyt = () => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </ThemeProvider>
    );
  };

  const PageLayout = () => {
    switch (getLayoutRoute(router.pathname)) {
      case LayoutRoute.ADMIN:
        return <AdminLyt />;
      case LayoutRoute.STUDENT:
        return <PocLyt />;
      case LayoutRoute.LOGOUT:
        return <LogOutPage />;
      case LayoutRoute.INDEX:
        return <LandingLyt />;
      case LayoutRoute.REGISTRATION:
        return <SignUpLyt />;
      case LayoutRoute.LOGIN:
        return <SignInLyt />;
      default:
        return <IndexPage />;
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Learn Or Teach</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <PageLayout />
          </QueryClientProvider>
        </ThemeProvider>
      </RecoilRoot>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
