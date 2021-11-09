import {
  Avatar,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import styles from './events.module.scss';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import moment from 'moment';
import Link from 'next/link';

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: '100%',
      maxHeight: '300px',
    },
    content: {
      padding: '25px',
    },
    label: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
    dateTimeCard: {
      margin: '10px 0',
      padding: '10px 20px',
      background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: '4px',
      font: `normal normal 600 10px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
      whiteSpace: 'nowrap',
      width: 'fit-content',
    },
    dayStyle: {
      padding: '11px 20px',
      marginRight: '15px',
      marginLeft: '-21px',
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      borderRadius: ` 4px 0px 0px 4px`,
    },
    description: {
      margin: '10px 0',
      font: ` normal normal normal 10px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    attendeesContent: {
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
    },
    attendeesName: {
      paddingLeft: '10px',
      font: `normal normal 600 10px/15px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    borderNone: {
      border: 'none',
    },
    meetingButton: {
      marginTop: '30px',
      padding: '10px 30px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 3px #00000007`,
      borderRadius: '4px',
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      whiteSpace: 'nowrap',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
    mettingSvg: {
      width: '15px',
      height: '15px',
      marginRight: '15px',
    },
  })
);
export default function EventDetail({ handleClose, selectedEvent }) {
  const classes = useStyles();

  return (
    <Grid>
      <Paper>
        <div className={styles.header}>
          <h1 className={styles.inviteNewEventText}>{selectedEvent.name}</h1>
          <div className={styles.close} onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={9.558}
              height={9.557}
              viewBox="0 0 9.558 9.557"
            >
              <path
                d="M9.381 8.532a.6.6 0 11-.848.848L4.779 5.619 1.025 9.38a.6.6 0 11-.848-.848l3.761-3.754L.177 1.023a.6.6 0 11.848-.848l3.754 3.761L8.533.175a.6.6 0 01.848.848L5.619 4.777z"
                fill="#7d8793"
              />
            </svg>
          </div>
        </div>

        <img
          src={selectedEvent.cover}
          alt="event-image"
          className={classes.image}
        />

        <Grid className={classes.content}>
          <Grid container style={{ width: '100%' }}>
            <Grid item sm={12} md={6}>
              <div style={{ marginRight: '10px' }}>
                <label className={classes.label}>Date</label>
                <div className={classes.dateTimeCard}>
                  <span className={classes.dayStyle}>
                    {selectedEvent.startDateTime
                      ? moment(selectedEvent.startDateTime).format('dddd')
                      : '-'}
                  </span>
                  {selectedEvent.startDateTime
                    ? moment(selectedEvent.startDateTime).format('DD MMMM YYYY')
                    : '-'}
                </div>
              </div>
            </Grid>
            <Grid item sm={12} md={6}>
              <div style={{ marginRight: '10px' }}>
                <label className={classes.label}>Time</label>
                <div className={classes.dateTimeCard}>
                  {selectedEvent.startDateTime
                    ? moment(selectedEvent.startDateTime).format('hh:mm A')
                    : '-'}{' '}
                  -{' '}
                  {selectedEvent.endDateTime
                    ? moment(selectedEvent.endDateTime).format('hh:mm A')
                    : '-'}
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid>
            <label className={classes.label}>Description</label>
            <div className={classes.description}>
              {selectedEvent.description}
            </div>
          </Grid>
          <Grid>
            <label className={classes.label}>Attendees</label>

            <Grid container>
              {selectedEvent.users.map((user, index) => (
                <Grid item xl={4} md={4} key={`user-id-${index}`}>
                  <div className={classes.attendeesContent}>
                    <Avatar src={user.img} />
                    <span className={classes.attendeesName}>{user.name}</span>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Link href={selectedEvent?.url || ''} passHref>
            <Button className={classes.meetingButton}>
              <div className={classes.mettingSvg}>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              Go to Zoom Meeting
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  );
}
