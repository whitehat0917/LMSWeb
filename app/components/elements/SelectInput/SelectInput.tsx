import React from 'react';
import styles from './SelectInput.module.scss';

const SelectInput = ({ selectValue, onSelectChange, style, children }) => {
  return (
    <select
      value={selectValue}
      onChange={onSelectChange}
      className={styles.dropdown}
      style={style}
    >
      {children}
    </select>
  );
};

export default SelectInput;
