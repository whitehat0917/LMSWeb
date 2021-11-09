import { layoutContext } from '@layout/admin/Layout';
import { Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import styles from '../usermanagement.module.scss';
import SearchFilter from './SearchFilter';
import TeamTable from './TeamTable';

export default function UserTeam({ organizationId }) {
  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);
  const [selectedTeam, setSelectedTeam] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const handleModalToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const handleSearch = (val) => {
    setSearchValue(val);
  };
  React.useEffect(() => {
    setHeader('Team Management');
    setIsVisibleFreeTrial(false);
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);
  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <SearchFilter
          handleSearch={handleSearch}
          handleModalToggle={handleModalToggle}
          open={open}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
          organizationId={organizationId}
        />
      </Paper>
      <TeamTable
        organizationId={organizationId}
        searchValue={searchValue}
        setSelectedTeam={setSelectedTeam}
        handleModalToggle={handleModalToggle}
      />
    </Grid>
  );
}
