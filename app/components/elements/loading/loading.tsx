import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <>
      <div className={styles.circle}>
        <div className={styles.circle__border}></div>
        <div className={styles.circle__logo}>
          <img src="/images/logo-only.png" alt="lgo" />
        </div>
      </div>
    </>
  );
};

export default Loading;
