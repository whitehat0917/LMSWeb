import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import WelcomeMsg from './WelcomeMsg';
import QuickState from './QuickState';
import QuickStateChart from './QuickStateChart';
import QuickLinks from './QuickLinks';
import { layoutContext } from '@layout/admin/Layout';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { UserInfoFactory } from '@lms-api/factory';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      boxShadow: 'none',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export default function Dashboard({ organizationId }) {
  const classes = useStyles();

  const [filterValue, setFilterValue] = useState(25);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const setAppointment = () => {
    console.log('put logic here for setting appointment');
  };
  const authnInfo = useRecoilValue(authnState);
  const { setHeader } = React.useContext(layoutContext);

  React.useEffect(() => {
    setHeader(`Welcome back, ${authnInfo.userInfo.firstName}`);
    return () => {
      setHeader(null);
    };
  }, []);

  return (
    <>
      <div className={classes.root}>
        <WelcomeMsg setAppointment={setAppointment} />
      </div>
      <div className={classes.root}>
        <QuickState organizationId={organizationId} />
        <QuickStateChart
          filterValue={filterValue}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <QuickLinks />
    </>
  );
}
