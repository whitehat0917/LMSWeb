import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { signUpStepState } from 'store';
import HeaderLayout from './header';
import SideBarLayout from './sidebar';
import LoadingView from '@module/elements/loading/loading-view';
import styles from './signup.module.scss';
import { Authentication } from '@lms-api/services';
import { useRouter } from 'next/router';

const IndexLayout = ({ children }) => {
  const router = useRouter();
  const [step, setStep] = useRecoilState(signUpStepState);
  const counter =
    step.items.filter((x) => x.complete).length === 3
      ? 100
      : step.items.filter((x) => x.complete).length === 2
      ? 75
      : 25;

  const subscriptionFlow = router.pathname === '/registration/subscription';
  useEffect(() => {
    if (!step.currentUser) {
      const currentUser = Authentication.getCurrentADUser();
      if (currentUser) {
        setStep({ ...step, currentUser });
      } else {
        window.location.href = '/';
      }
    }
  }, [step]);

  if (!step.currentUser) {
    return <LoadingView />;
  }

  return (
    <div className="">
      <HeaderLayout />
      <main className={styles.mainContenaire}>
        {!subscriptionFlow && (<SideBarLayout value={counter} />)}
        <div className={styles.mainContent}>{children}</div>
      </main>
    </div>
  );
};

export default IndexLayout;
