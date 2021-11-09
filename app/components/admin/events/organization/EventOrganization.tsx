import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Modal,
  Paper,
} from '@material-ui/core';
import * as React from 'react';
import SearchFilter from './SearchFilter';
import styles from '../events.module.scss';
import { layoutContext } from '@layout/admin/Layout';
import EventOrganizationTable from './EventOrganizationTable';
import { lmsStyle } from 'styles/ui.variables';
import CreateNewEvent from '../CreateNewEvent';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

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
      whiteSpace: 'nowrap',
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
    overflow: {
      overflow: 'scroll',
    },
    inviteModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      [theme.breakpoints.down('sm')]: {
        transform: `translate(-50%, -35%)`,
        width: '75%',
      },
    },
    mobileView: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  })
);

export default function EventOrganization() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);

  const [searchValue, setSearchValue] = React.useState('');
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    setHeader('Manage Events');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <div className={classes.headerContent}>
        <Button
          className={classes.createEvent}
          onClick={() => {
            setSelectedEvent(null);
            handleOpen();
          }}
        >
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
      <EventOrganizationTable search={searchValue} />

      <Modal
        open={open}
        className={classes.overflow}
        onClose={() => setOpen(false)}
      >
        <div className={classes.inviteModal}>
          <CreateNewEvent
            organizationId={organizationId}
            onClose={() => setOpen(false)}
            selectedEvent={selectedEvent}
          />
        </div>
      </Modal>
    </Grid>
  );
}
