import { layoutContext } from '@layout/admin/Layout';
import { Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import BattleboardTable from './BattleboardTable';
import { useStyles } from './ui';
import styles from './battleboard.module.scss';
import UserMenu from '../users/UserMenu';
import Link from 'next/link';

export default function BattleboardDetails({ organizationId }) {
  const classes = useStyles();
  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    setHeader('User and Teams');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <Link href={`/admin/battleboard/`} passHref>
        <span className={classes.backLink}>Go Back To Organizations</span>
      </Link>
    );
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, []);

  const handleSearch = (val) => {
    setSearchValue(val);
  };

  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <Grid container className={styles.userPanel}>
          <Grid item xs={12} sm={8} md={8} lg={9} className={classes.searchBar}>
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
              placeholder={`Filter users by name or email`}
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
          </Grid>
          <Grid item xs={8} sm={3} md={3} lg={2} className={styles.userButton}>
            <UserMenu />
          </Grid>
        </Grid>
      </Paper>
      <BattleboardTable search={searchValue} organizationId={organizationId} />
    </Grid>
  );
}
