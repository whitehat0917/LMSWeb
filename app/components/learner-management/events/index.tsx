import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Box, DialogContent, Grid, IconButton, makeStyles } from '@material-ui/core';
import SegmentHeader from '@element/segementHeader';
import EventList from '@module/learner-management/events/eventList';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import EventCalendarCard from '@module/learner-management/events/eventCalendarCard';
import { eventCalendarInfo } from '../../../data/mock';
import { lmsStyle } from '../../../styles/ui.variables';
import 'react-calendar/dist/Calendar.css';

const useStyle = makeStyles(() => ({
  calendarDlgContent: {
    maxHeight: '459px',
  },
  iconBtn: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    color: lmsStyle['base-secondary'],
  },
  bgGrid: {
    backgroundColor: lmsStyle['base-secondary'],
    overflowY: 'auto',
  },
  iconColor: {
    color: 'white',
    width: '20px',
    height: '20px',
  },
  backDrop: {
    filter: 'blur(6rem)',
    backgroundColor: lmsStyle['base-gray-400'],
  },
}));

export function Events() {
  const [btnClicked, setBtnClicked] = useState(false);
  const handleClick = () => {
    setBtnClicked(!btnClicked);
  };
  const handleClickClose = () => {
    setBtnClicked(false);
  };
  const classes = useStyle();
  return (
    <>
      <SegmentHeader
        data={{ title: 'All Events', btnTitle: 'Event Calendar', type: 1 }}
        onClick={handleClick}
      />
      <EventList />
      <Dialog
        open={btnClicked}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={'md'}
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
      >
        <DialogContent
          style={{ padding: '0px', position: 'relative', maxHeight: '462px' }}
        >
          <IconButton
            aria-label="delete"
            className={classes.iconBtn}
            onClick={() => handleClickClose()}
          >
            <CloseIcon fontSize="large" className={classes.iconColor} />
          </IconButton>
          <Grid container>
            <Grid item xs={12} sm={8} md={8}>
              <Box
                height="47px"
                color={lmsStyle['base-secondary']}
                border={`1px solid ${lmsStyle['base-gray-300']}`}
                borderRadius="4px 4px 0px 0px"
                bgcolor={lmsStyle['base-gray-100']}
                fontSize="14px"
                fontWeight="600"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                Event Calendar
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="43px"
                pb="83px"
              >
                <Calendar />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4} className={classes.bgGrid}>
              <Box
                height="47px"
                display="flex"
                alignItems="center"
                pl="25px"
                fontSize="14px"
                fontWeight="600"
                color="white"
              >
                25th March
              </Box>
              <Box p="30px 19px">
                {eventCalendarInfo.map((item, key) => (
                  <EventCalendarCard key={key} data={item} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Events;
