import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onHandleClick, children, style }) => {
  return (
    <button onClick={onHandleClick} className={styles.button} style={style}>
      {children}
    </button>
  );
};

export default Button;
