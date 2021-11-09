import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { signUpStepState } from 'store';
import styles from './signup.module.scss';
import LinearProgress, {
  LinearProgressProps,
} from '@material-ui/core/LinearProgress';
import { Authentication } from '@lms-api/services';

const SideBarLayout = (props: LinearProgressProps & { value: number }) => {
  const [step, setStep] = useRecoilState(signUpStepState);

  useEffect(() => {
    const currentUser = Authentication.getCurrentADUser();
    if (currentUser) {
      setStep({ ...step, currentUser });
    }
  }, []);

  const clickStep = (item) => {
    if ((item.id !== 1 && !step.currentUser?.userId) || item.id < 2) {
      return;
    }
    const items = step.items.map((x) =>
      x.id === item.id ? { ...x, active: true } : { ...x, active: false }
    );
    const currentStep = { ...step, step: item.id, items };
    setStep(currentStep);
  };

  return (
    <aside className={styles.sideBar}>
      <div className={styles.sideBar__header}>
        <span>Complete Registration ({`${Math.round(props.value)}%`})</span>
        <div className={styles.sideBar__header__linear}>
          <LinearProgress variant="determinate" {...props} />
        </div>
      </div>
      {step.items.map((item) => (
        <div
          key={item.title}
          className={styles.sideBar__item}
          onClick={() => clickStep(item)}
        >
          <span
            className={
              item.active
                ? styles.sideBar__item__active
                : styles.sideBar__item__normal
            }
          >
            {item.title}
          </span>
          {item.complete ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              fill="#00B476"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <></>
          )}
        </div>
      ))}
    </aside>
  );
};

export default SideBarLayout;
