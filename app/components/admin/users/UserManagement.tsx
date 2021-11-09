import { layoutContext } from '@layout/admin/Layout';
import { Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import styles from './usermanagement.module.scss';
import UserSearchFilter from './UserSearchFilter';
import UserTable from './UserTable';
import UserTypeTabs from './UserTypeTabs';

export default function UserManagement({ organizationId }) {
  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);
  const [searchValue, setSearchValue] = React.useState('');
  const [shouldRefresh, setShouldRefresh] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [userType, setUserType] = React.useState('all');
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
  };

  const handleTab = (event, value) => {
    setTabValue(value);
    switch (value) {
      case 0:
        setUserType('all');
        break;
      case 1:
        setUserType('learner');
        console.log('learner');
        break;
      case 2:
        setUserType('educator');
        break;
      case 3:
        setUserType('admin');
        break;
      default:
        setUserType('all');
        break;
    }
  };
  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <UserSearchFilter handleSearch={handleSearch} refresh={setShouldRefresh} />
        <UserTypeTabs handleTabChange={handleTab} activeTab={tabValue} />
      </Paper>
      <UserTable
        search={searchValue}
        organizationId={organizationId}
        refresh={shouldRefresh}
        userType={userType}
      />
    </Grid>
  );
}
