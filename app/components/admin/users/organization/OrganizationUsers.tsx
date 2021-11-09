import { Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import UserSearchFilter from './UserSearchFilter';
import styles from '../usermanagement.module.scss';
import OrganizationTable from './OrganizationTable';
import { layoutContext } from '@layout/admin/Layout';

export default function OrganizationUsers() {
  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);
  const [searchValue, setSearchValue] = React.useState('');
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  React.useEffect(() => {
    setHeader('Manage Users');
    setIsVisibleFreeTrial(false);
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);
  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <UserSearchFilter handleSearch={handleSearch} />
      </Paper>
      <OrganizationTable search={searchValue} />
    </Grid>
  );
}
