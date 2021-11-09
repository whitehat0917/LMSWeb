import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import * as React from 'react';
import styles from '../learningpath.module.scss';
import { layoutContext } from '@layout/admin/Layout';
import { lmsStyle } from 'styles/ui.variables';
import SearchFilter from './SearchFilter';
import LearningPathTable from './LearningPathTable';
import Link from 'next/link';

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

export default function LearningOrganization() {
  const classes = useStyles();
  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);

  const [searchValue, setSearchValue] = React.useState('');
  const handleSearch = (val) => {
    setSearchValue(val);
  };
  React.useEffect(() => {
    setHeader('Manage Learning Paths');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <div className={classes.headerContent}>
        <Link href={`/admin/createLearning/`} passHref>
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
  }, []);

  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <SearchFilter handleSearch={handleSearch} />
      </Paper>
      <LearningPathTable search={searchValue} />
    </Grid>
  );
}
