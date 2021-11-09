import React, { useEffect, useState } from 'react';
import styles from './signin.module.scss';
import { useRouter } from 'next/router';
import { GlobalUrls } from '@util/app-utils';

const IndexLayout = ({ children }) => {
  const router = useRouter();
  const [label, setLabel] = useState({
    title: 'Login to your account',
    description: 'Thank you for getting back to Learn or Teach. Enter your username and password to login.'
  })

  const signUpFlow = router.pathname === '/signup';

  useEffect(() => {
    if (router.pathname.startsWith(GlobalUrls.SIGNUP)) {
      setLabel({
        title: 'Manage all your online education',
        description: 'Let’s get you all set up so you can verify your personal account and begin setting up your profile'
      });
    }
    if (router.pathname.startsWith(GlobalUrls.FORGOT)) {
      setLabel({
        title: 'Reset Password',
        description: ''
      });
    }
    if (router.pathname.startsWith(GlobalUrls.NEWPASSWORD)) {
      setLabel({
        title: 'Manage all your online education',
        description: 'Let’s get you all set up so you can verify your personal account and begin setting up your profile'
      });
    }
  }, [router])

  return (
    <main className={styles.loginContainer}>
      <div className={styles.loginContainer__layoutRow}>
        <div
          className={
            signUpFlow
              ? styles.loginContainer__layoutRow__layoutColumnSignUp
              : styles.loginContainer__layoutRow__layoutColumn
          }
        />
        <div
          className={
            signUpFlow
              ? styles.loginContainer__layoutRow__layoutFormSignUp
              : styles.loginContainer__layoutRow__layoutForm
          }
        >
          <div
            className={
              signUpFlow
                ? styles.mainContent
                : [styles.mainContent, styles.mainContent__signIn].join(' ')
            }
          >
            <img
              alt="Company Logo"
              className={styles.mainContent__companyLogo}
              src="https://lmsassets.blob.core.windows.net/imd-assets/assets/images/logo-transp.png"
            />
            <div className={styles.mainContent__loginIntro} id="login-intro">
              <h1>
                {label.title}
              </h1>
              <p>{label.description}</p>
            </div>
            <div className={styles.mainContent__form}>{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexLayout;
