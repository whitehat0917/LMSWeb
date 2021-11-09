import * as React from 'react';
import {
  Button,
  ButtonGroup,
  createStyles,
  Grid,
  makeStyles,
  Modal,
  Paper,
} from '@material-ui/core';
import styles from './events.module.scss';
import { lmsStyle } from 'styles/ui.variables';
import EventCard from './EventCard';
import DailyEventCard from './DailyEventCard';
import MiniCalendar from './MiniCalendar';
import { layoutContext } from '@layout/admin/Layout';
import CreateNewEvent from './CreateNewEvent';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import Loader from '@element/Loader/Loader';
import { EventFactory, OrganizationFactory } from '@lms-api/factory';
import moment from 'moment';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: '20px',
      background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
      borderRadius: '5px',
    },
    eventButton: {
      marginRight: '10px',
      width: '169px',
      height: '36px',
      background: `${lmsStyle['base-primary']} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: lmsStyle['base-primary'],
        color: lmsStyle['color-white'],
      },
    },
    buttonGroup: {
      height: '36px',
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      borderRadius: '4px',
    },
    datePagination: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-secondary']}`,
      textTransform: 'capitalize',
    },
    calenderEvents: {
      display: 'flex',
    },
    eventContainer: {
      marginTop: '35px',
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
        width: '75%',
        transform: `translate(-50%, -35%)`,
      },
    },
    overflow: {
      overflow: 'scroll',
    },
  })
);

export default function Events({ organizationId }) {
  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);

  const organizationQueryById = useQuery(
    queryKeys.getOrganizationInfoById(organizationId),
    () => OrganizationFactory.get(organizationId)
  );

  const organization = organizationQueryById.data;
  React.useEffect(() => {
    setHeader(`Events by ${organization?.name}`);
    setIsVisibleFreeTrial(false);

    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, [organization]);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [open, setopen] = React.useState(false);

  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  const classes = useStyles();

  const eventQuery = useQuery(queryKeys.getEventsByOrgId(organizationId), () =>
    EventFactory.getByOrgId(organizationId)
  );

  if (eventQuery.isLoading) {
    return <Loader />;
  }
  const events = eventQuery.data;
  const dailyEvents = events.filter((event) =>
    moment(event.startDateTime).isSame(moment(), 'd')
  );
  return (
    <Grid container>
      <Paper className={classes.root}>
        <Grid item>
          <Grid className={styles.filterEvent}>
            <Button
              className={classes.eventButton}
              onClick={() => {
                setSelectedEvent(null);
                handleOpen();
              }}
            >
              Add New Event
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              className={classes.overflow}
            >
              <div className={classes.inviteModal}>
                <CreateNewEvent
                  organizationId={organizationId}
                  onClose={handleClose}
                  selectedEvent={selectedEvent}
                />
              </div>
            </Modal>
            <div>
              <ButtonGroup className={classes.buttonGroup}>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={5.385}
                    height={10.008}
                    viewBox="0 0 5.385 10.008"
                  >
                    <path
                      d="M0 4.914a.962.962 0 01.227-.533L3.679.359a.959.959 0 111.455 1.249l-2.915 3.4 2.915 3.4a.958.958 0 11-1.455 1.241L.231 5.627A.961.961 0 010 4.914z"
                      fill={`${lmsStyle['base-secondary']}`}
                    />
                  </svg>
                </Button>
                <Button className={classes.datePagination}>March 2021</Button>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={5.385}
                    height={10.008}
                    viewBox="0 0 5.385 10.008"
                  >
                    <path
                      d="M5.381 4.914a.962.962 0 00-.225-.529L1.708.362A.958.958 0 10.253 1.607l2.915 3.4-2.915 3.4a.958.958 0 101.455 1.245l3.448-4.026a.961.961 0 00.225-.712z"
                      fill={`${lmsStyle['base-secondary']}`}
                    />
                  </svg>
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        </Grid>
        <Grid item className={classes.eventContainer}>
          <Grid container>
            <Grid item sm={12} lg={4}>
              <Grid container className={classes.calenderEvents}>
                <Grid item sm={6} lg={12}>
                  <MiniCalendar />
                </Grid>
                <Grid item sm={6} lg={12}>
                  <div style={{ marginTop: '30px' }}>
                    <h3 className={styles.eventHeader}>Today&lsquo;s Events</h3>
                    <DailyEventCard events={dailyEvents} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} lg={8}>
              <EventCard
                organizationId={organizationId}
                events={events}
                setSelectedEvent={setSelectedEvent}
                selectedEvent={selectedEvent}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
