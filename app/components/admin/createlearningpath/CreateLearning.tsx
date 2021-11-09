import { Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import styles from './createlearning.module.scss';
import UserTypeTabs from './UserTypeTabs';
import MuiAlert from '@material-ui/lab/Alert';
import { layoutContext } from '@layout/admin/Layout';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { GlobalUrls } from '@util/app-utils';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function UserManagement() {
  const { setHeader, setIsVisibleFreeTrial } = React.useContext(layoutContext);
  const authnInfo = useRecoilValue(authnState);

  React.useEffect(() => {
    
    if (!authnInfo.isAuthenticate && !authnInfo.userInfo) {
      window.location.href = GlobalUrls.INDEX;
    }

    setHeader('Create Learning Path');
    setIsVisibleFreeTrial(false);
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);
  
  const [isToasterShowing, setToasterShowing] = React.useState('');

  const showToaster = (msg) => {
    setToasterShowing(msg);
    setTimeout(() => {
      setToasterShowing('');
    }, 2000);
  };

  const organizationId = authnInfo?.userInfo?.organizationId;
  
  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        {isToasterShowing && (
          <Alert severity="success">{isToasterShowing}</Alert>
        )}
        <UserTypeTabs
          showToaster={showToaster}
          organizationId={organizationId}
        />
      </Paper>
    </Grid>
  );
}
