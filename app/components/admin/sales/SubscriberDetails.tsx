import { layoutContext } from '@layout/admin/Layout';
import { createStyles, Grid, makeStyles, Paper } from '@material-ui/core';
import SelectInput from '@element/SelectInput/SelectInput';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import styles from './sales.module.scss';
import SubscriptionTable from './SubscriptionTable';

const useStyles = makeStyles((theme) =>
  createStyles({
    searchBar: {
      position: 'relative',
      marginInline: '10px',
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const filterOptions = [
  { title: 'Last 7 days', value: 7 },
  { title: 'Last 14 days', value: 14 },
  { title: 'Last 30 days', value: 30 },
];

export default function SubscriberDetails() {
  const classes = useStyles();
  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);
  const [searchValue, setSearchValue] = React.useState('');
  const [filterValue, setFilterValue] = React.useState(25);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  React.useEffect(() => {
    setHeader('User Management');
    setIsVisibleFreeTrial(false);
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);

  const handleSearch = (val) => {
    setSearchValue(val);
    console.log(searchValue);
  };

  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <Grid className={styles.userPanel}>
          <Grid className={classes.searchBar}>
            <div className={classes.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10.993}
                height={11}
                viewBox="0 0 10.993 11"
              >
                <path
                  d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                  fill={lmsStyle['base-primary']}
                />
              </svg>
            </div>
            <input
              className={styles.searchUser}
              placeholder={`Search for a subscriber`}
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
          </Grid>
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
        </Grid>
      </Paper>
      <SubscriptionTable searchValue={searchValue} />
    </Grid>
  );
}
