import * as React from 'react';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Modal,
  Paper,
} from '@material-ui/core';
import styles from './events.module.scss';
import { lmsStyle } from 'styles/ui.variables';
import moment from 'moment';
import EventDetail from './EventDetail';
import CreateNewEvent from './CreateNewEvent';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('xs')]: {
        marginTop: '20px',
      },
    },
    eventPaper: {
      padding: '20px',
      marginBottom: '10px',
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      boxShadow: `0px 3px 3px #00000008`,
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: '20px 10px',
      },
    },
    todayEventContent: {
      width: '100%',
      cursor: 'pointer',
    },
    eventModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      [theme.breakpoints.down('sm')]: {
        transform: `translate(-50%, -35%)`,
      },
    },
    overflow: {
      overflow: 'scroll',
    },
    eventTiming: {
      display: 'flex',
      alignItems: 'center',
    },
    editEventButton: {
      marginLeft: '25px',
      padding: '7px 20px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 3px #00000007`,
      borderRadius: ' 4px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      whiteSpace: 'nowrap',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: '10px',
      },
    },
  })
);

export default function EventCard({
  events,
  setSelectedEvent,
  selectedEvent,
  organizationId,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };
  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setOpen(false);
  };

  return (
    <Grid container className={classes.root}>
      {events.map((event, index) => (
        <Grid
          item
          className={classes.todayEventContent}
          key={`event-id-${index}`}
          onClick={() => {
            setSelectedEvent(event);
            handleOpen();
          }}
        >
          <Paper className={`${classes.eventPaper} ${styles.singleEvent}`}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs={4} md={3} className={styles.eventName}>
                {event.name}
              </Grid>
              <Grid
                item
                xs={8}
                md={9}
                className={classes.eventTiming}
                justify="flex-end"
              >
                <span className={styles.eventDate}>
                  {event.startDateTime
                    ? moment(event.startDateTime).format('DD MMMM')
                    : '-'}
                </span>
                <span className={styles.eventTime}>
                  {event.startDateTime
                    ? moment(event.startDateTime).format('hh:mm A')
                    : '-'}{' '}
                  -{' '}
                  {event.endDateTime
                    ? moment(event.endDateTime).format('hh:mm A')
                    : '-'}
                </span>
                <Grid>
                  <Button
                    className={classes.editEventButton}
                    onClick={() => {
                      handleEditModalOpen();
                      setSelectedEvent(event);
                    }}
                  >
                    Edit Event
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
      <Modal open={open} onClose={handleClose} className={classes.overflow}>
        <div className={classes.eventModal}>
          <EventDetail
            handleClose={handleClose}
            selectedEvent={selectedEvent}
          />
        </div>
      </Modal>
      <Modal
        open={editModalOpen}
        onClose={handleEditModalClose}
        className={classes.overflow}
      >
        <div className={classes.eventModal}>
          <CreateNewEvent
            organizationId={organizationId}
            onClose={handleEditModalClose}
            selectedEvent={selectedEvent}
          />
        </div>
      </Modal>
    </Grid>
  );
}
