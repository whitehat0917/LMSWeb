import React from 'react';
import styles from './User.module.scss';

const Pagination = () => {
  return (
    <div className={styles.center}>
      <div className={styles.pagination}>
        <a href="#">Previous</a>
        <a className={styles.active} href="#">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">Next</a>
      </div>
    </div>
  );
};

export default Pagination;
