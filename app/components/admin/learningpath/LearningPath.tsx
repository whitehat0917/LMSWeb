import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import * as React from 'react';
import styles from './learningpath.module.scss';
import UserSearchFilter from './UserSearchFilter';
import UserTable from './UserTable';
import MuiAlert from '@material-ui/lab/Alert';
import { layoutContext } from '@layout/admin/Layout';
import { lmsStyle } from 'styles/ui.variables';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { OrganizationFactory } from '@lms-api/factory';
import Link from 'next/link';
import Loading from '@element/loading/loading';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    headerContent: {
      display: 'flex',
    },
    createEvent: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 27px',
      background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 3px #00000007`,
      borderRadius: `4px`,
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      marginRight: '20px',
      '&:hover': {
        background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    createEventSvg: {
      width: '15px',
      height: '15px',
      marginRight: '10px',
      [theme.breakpoints.down('sm')]: {
        marginRight: '0',
      },
    },
    mobileView: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  })
);
export default function LearningPath({ organizationId }) {
  const classes = useStyles();
  const [search, setSearch] = React.useState('');
  const [isToasterShowing, setToasterShowing] = React.useState('');

  const {
    setHeader,
    setHeaderContent,
    setIsVisibleFreeTrial,
  } = React.useContext(layoutContext);

  const organizationQueryById = useQuery(
    queryKeys.getOrganizationInfoById(organizationId),
    () => OrganizationFactory.get(organizationId)
  );

  const organization = organizationQueryById.data;

  React.useEffect(() => {
    setHeader(`Learning Paths by ${organization?.name}`);
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <div className={classes.headerContent}>
        <Link href={`/admin/createLearning/${''}`} passHref>
          <Button className={classes.createEvent}>
            <div className={classes.createEventSvg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="prefix__h-6 prefix__w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div className={classes.mobileView}>Create New</div>
          </Button>
        </Link>
      </div>
    );
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, [organization]);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const showToaster = (msg) => {
    setToasterShowing(msg);
    setTimeout(() => {
      setToasterShowing('');
    }, 2000);
  };
  if (organizationQueryById.isLoading) {
    <Loading />;
  }
  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        {isToasterShowing && (
          <Alert severity="success">{isToasterShowing}</Alert>
        )}
        <UserSearchFilter handleSearch={handleSearch} />
      </Paper>
      <UserTable
        search={search}
        showToaster={showToaster}
        organizationId={organizationId}
      />
    </Grid>
  );
}
