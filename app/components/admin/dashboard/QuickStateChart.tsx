import * as React from 'react';
import SelectInput from '@element/SelectInput/SelectInput';
import { filterOptions } from '@layout/admin/MenuOptions';
import StatsChart from '@element/Chart/StatsChart';
import styles from './dashboard.module.scss';
import { layoutContext } from '@layout/admin/Layout';

export default function QuickStateChart({ filterValue, handleFilterChange }) {
  const { setHeader, setIsVisibleFreeTrial } = React.useContext(layoutContext);

  React.useEffect(() => {
    setHeader(`Welcome back, Admin`);
    setIsVisibleFreeTrial(false);
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);
  return (
    <>
      <div className={styles.statsHeader}>
        <h2 className={styles.statsHeading}>Quick Stats</h2>
        <div className={styles.filterContainer}>
          <SelectInput
            selectValue={filterValue}
            onSelectChange={handleFilterChange}
            style={{}}
          >
            {filterOptions.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.title}
                </option>
              );
            })}
          </SelectInput>
        </div>
      </div>
      <div className={`${styles.root} ${styles.dropShadow}`}>
        <StatsChart filterValue={filterValue} />
      </div>
    </>
  );
}
