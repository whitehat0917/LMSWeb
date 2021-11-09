import * as React from 'react';
import {
  Box,
  Button,
  createStyles,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { lmsStyle } from 'styles/ui.variables';
import styles from './events.module.scss';
import { useMutation, useQueryClient } from 'react-query';
import { EventFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import { authnState } from 'store';
import { useRecoilValue } from 'recoil';
import moment from 'moment';
import { pick } from 'lodash';
import { Event as EventDto } from '@lms-api/models';
import { useDropzone } from 'react-dropzone';
import restClient from '@lms-api/RestClient';

const useStyles = makeStyles((theme) =>
  createStyles({
    linkInput: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: '#29AC79',
    },
    linkButton: {
      height: '40px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      padding: '0px 15px',
      '&:hover': {
        borderBottom: 'none',
      },
      '&::before': {
        borderBottom: 'none',
      },
      '&::after': {
        borderBottom: 'none',
      },
    },
    subText: {
      fontSize: '11px',
      color: lmsStyle['base-gray-500'],
      font: `normal normal 300 10px/12px ${lmsStyle['base-font']}`,
    },
    startAdornment: {
      padding: '0',
    },
    submitButton: {
      marginTop: '30px',
      padding: '10px 30px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 3px #00000007`,
      borderRadius: `4px`,
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
      [theme.breakpoints.down('xs')]: {
        margin: '30px auto',
      },
    },
    paddingLeft: {
      '& > div': {
        paddingLeft: '0px',
      },
    },
    inputAndorsment: {
      paddingLeft: '0',
    },
    mobileView: {
      marginLeft: '15px',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  })
);

export default function CreateNewEvent({
  onClose,
  selectedEvent,
  organizationId,
}) {
  const classes = useStyles();
  const [image, setImage] = React.useState(null);
  const authnInfo = useRecoilValue(authnState);
  const eventQuery = queryKeys.getEventsByOrgId(
    authnInfo.userInfo?.organizationId
  );
  const queryClient = useQueryClient();
  const createEventMutation = useMutation(EventFactory.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(eventQuery);
      onClose();
    },
  });
  const updateEventMutation = useMutation(
    ({ ...updateData }: EventDto) =>
      EventFactory.update(selectedEvent.id, updateData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(eventQuery);
        onClose();
      },
    }
  );

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length) {
        const file = acceptedFiles[0];
        console.log(file, 'uploading image file');

        const formData = new FormData();
        formData.append(
          'files',
          file,
          new Date().getTime() + '.' + file.name.split('.')[1]
        );
        restClient
          .commonPost(
            'Storage/Upload?containerName=assets&folderName=course',
            formData
          )
          .then((res) => {
            setImage(res.data[0]);
          });
      }
      console.log('image are', image);
    },
    [image]
  );

  const { open: handleFileUpload } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
  });

  function onSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData = new FormData(event.target);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = Object.fromEntries(formData);

    data.startDateTime = moment(data.startDate + ' ' + data.startTime).format(
      'MM/DD/YYYY, HH:MM A'
    );
    data.endDateTime = moment(data.endDate + ' ' + data.endTime).format(
      'MM/DD/YYYY, HH:MM A'
    );
    if (selectedEvent) {
      updateEventMutation.mutate({
        organizationId: organizationId,
        name: data.name,
        startDateTime: data.startDateTime,
        endDateTime: data.endDateTime,
        description: data.description,
        cover: image,
        url: data.url,
      });
    } else {
      createEventMutation.mutate({
        organizationId: organizationId,
        cover: image,
        ...pick(data, [
          'name',
          'description',
          'startDateTime',
          'endDateTime',
          'url',
        ]),
      });
    }
  }
  return (
    <Grid container>
      <Paper style={{ width: '100%' }}>
        <div className={styles.header}>
          <h1 className={styles.inviteNewEventText}>Create New Event</h1>
          <div className={styles.close} onClick={onClose}>
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
        <form onSubmit={onSubmit}>
          <Grid container className={styles.modalContent} spacing={2}>
            <Grid item xs={12}>
              <TextInputOutline
                id="name"
                name="name"
                label={<span>Enter Name</span>}
                defaultValue={selectedEvent?.name}
              ></TextInputOutline>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={12}>
              <TextInputOutline
                name="startDate"
                type="date"
                label="Start Date"
                defaultValue={
                  selectedEvent?.startDateTime
                    ? moment(selectedEvent.startDateTime).format('YYYY-MM-DD')
                    : ''
                }
              ></TextInputOutline>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={12}>
              <TextInputOutline
                name="startTime"
                type="time"
                label="Start Time"
                defaultValue={
                  selectedEvent?.startDateTime
                    ? moment(selectedEvent.startDateTime).format('HH:mm:ss')
                    : ''
                }
              ></TextInputOutline>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={12}>
              <TextInputOutline
                name="endDate"
                type="date"
                label="End Date"
                defaultValue={
                  selectedEvent?.endDateTime
                    ? moment(selectedEvent.endDateTime).format('YYYY-MM-DD')
                    : ''
                }
              ></TextInputOutline>
            </Grid>
            <Grid item xs={6} lg={6} md={6} sm={12}>
              <TextInputOutline
                name="endTime"
                type="time"
                label="End Time"
                defaultValue={
                  selectedEvent?.endDateTime
                    ? moment(selectedEvent.endDateTime).format('HH:mm:ss')
                    : ''
                }
              ></TextInputOutline>
            </Grid>
            <Grid item xs={12}>
              <TextInputOutline
                id="Attendees"
                label="Select Attendees"
              ></TextInputOutline>
            </Grid>
            <Grid item xs={12}>
              <TextInputOutline
                multiline
                name="description"
                id="Description"
                label="Event Description"
                defaultValue={selectedEvent?.description}
              ></TextInputOutline>
            </Grid>
            <Grid item xs={12}>
              <DropzoneArea
                acceptedFiles={['image/*']}
                dropzoneText={'Drag and drop an image'}
                onChange={handleFileUpload}
                onDrop={onDrop}
                //Icon={DropzoneIcon}
              ></DropzoneArea>
            </Grid>
            <Grid item xs={12}>
              <TextInputOutline
                id="meetlink"
                name="url"
                placeholder="http://"
                classes={{
                  root: classes.paddingLeft,
                  // input: classes.inputHeight,
                }}
                label={
                  <span>
                    Meeting Link
                    <b className={classes.subText}>
                      (Google Meet, Zoom and Microsoft Teams supported)
                    </b>
                  </span>
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      classes={{
                        root: classes.inputAndorsment,
                      }}
                    >
                      <Select
                        value="Google Meet"
                        className={classes.linkButton}
                      >
                        <MenuItem value="Google Meet">
                          <Box display="flex" alignItems="center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14.813}
                              height={17.139}
                              viewBox="0 0 14.813 17.139"
                            >
                              <defs>
                                <linearGradient
                                  id="prefix__a"
                                  x1={0.261}
                                  y1={0.68}
                                  x2={0.749}
                                  y2={0.193}
                                  gradientUnits="objectBoundingBox"
                                >
                                  <stop offset={0} stopColor="#058b7e" />
                                  <stop offset={0} stopColor="#058d80" />
                                  <stop offset={1} stopColor="#058d7f" />
                                </linearGradient>
                              </defs>
                              <path
                                d="M7.389 0A7.3 7.3 0 000 7.212a7.3 7.3 0 007.389 7.212l.016 2.715c3.8-2.157 7.408-5.036 7.408-9.927A7.332 7.332 0 007.389 0z"
                                fill="url(#prefix__a)"
                              />
                              <path d="M7.389 0A7.3 7.3 0 000 7.212a7.3 7.3 0 007.389 7.212l.016 2.715c3.8-2.157 7.408-5.036 7.408-9.927A7.332 7.332 0 007.389 0z" />
                              <path
                                d="M7.389 0A7.3 7.3 0 000 7.212a7.3 7.3 0 007.389 7.212l.016 2.715c3.8-2.157 7.408-5.036 7.408-9.927A7.332 7.332 0 007.389 0z"
                                fill="#3e8b7f"
                              />
                              <path d="M3.217 7.414v1.982a.954.954 0 00.951.951h4.92a.954.954 0 00.951-.951V8.145l1.948 1.948V7.415z" />
                              <path
                                d="M3.217 7.414v1.982a.954.954 0 00.951.951h4.92a.954.954 0 00.951-.951V8.145l1.948 1.948V7.415z"
                                fill="#f6f6f6"
                              />
                              <path
                                d="M11.987 7.414V4.728l-1.951 1.944v-1.24a.954.954 0 00-.951-.951h-4.92a.954.954 0 00-.951.951v1.982z"
                                fill="#e2e2e2"
                              />
                            </svg>
                            <b className={classes.mobileView}>Google Meet</b>
                          </Box>
                        </MenuItem>
                      </Select>
                    </InputAdornment>
                  ),
                }}
              ></TextInputOutline>
            </Grid>
            <Button type="submit" className={classes.submitButton}>
              Create New Event
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}
