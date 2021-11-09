import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '@module/course-management/CourseForm/Model.module.scss';
import { useStyles } from './ui';
import FormData from 'form-data';
import { useMutation } from 'react-query';
import { UploadDto } from '@lms-api/models';
import { UploadFactory } from '@lms-api/factory';

// dialog box code
const DialogTitle = (props) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};
// dialog box code end

const UploadAudioDialog = (props) => {
  const classes = useStyles();

  const [title, setTitle] = useState(
    props.audioData.name ? props.audioData.name : ''
  );
  const [audio, setAudio] = useState(
    props.audioData.audio ? props.audioData.audio : ''
  );

  const createUploadMutation = useMutation(
    ({ containerName, folderName, fileData }: UploadDto) =>
      UploadFactory.create(containerName, folderName, fileData)
  );

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      console.log(file, 'uploading video file');
      const fileData = new FormData();
      fileData.append(
        'files',
        file,
        new Date().getTime() + '.' + file.name.split('.')[1]
      );
      const audioUrl = await createUploadMutation.mutateAsync({
        containerName: 'assets',
        folderName: 'course',
        fileData: fileData,
      });
      setAudio(audioUrl[0]);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: handleFileUpload,
  } = useDropzone({
    onDrop,
    accept: 'audio/*',
    noClick: true,
    noKeyboard: true,
  });

  const onSubmit = async () => {
    if (title !== '' || audio !== '') {
      if (props.audioData?.id) {
        props.handleSubmit({
          id: props.audioData.id,
          name: title,
          audio: audio,
        });
      } else {
        props.handleSubmit({
          id: 0,
          name: title,
          audio: audio,
        });
      }
      props.setOpen(false);
    }
  };

  return (
    <>
      <Dialog
        className={classes.boxDialog}
        onClose={() => props.setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle
          classes={classes}
          onClose={() => props.setOpen(false)}
          className={classes.title}
        >
          Upload Audio File
        </DialogTitle>
        <DialogContent className={classes.dialogheight}>
          <p className={classes.dialogpara} style={{ marginBottom: '0px' }}>
            Audio Title
          </p>
          <TextField
            placeholder="Let’s get to know you"
            className={classes.fieldwidth}
            size="small"
            margin="normal"
            variant="outlined"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <Card className={classes.OverviewCard}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p className={classes.dropbox}>
                  <img
                    src="/images/Group 2.svg"
                    className={classes.img}
                    width="100%"
                    height="125px"
                  />
                  {audio && (
                    <Typography variant="caption" display="block" align="center">
                      {audio}
                    </Typography>
                  )}
                  <p className={styles.pDrag}> Drag and drop your video here</p>
                  <p style={{ marginTop: '10px', textAlign: 'center' }}>
                    <span
                      onClick={handleFileUpload}
                      className={classes.browseFileText}
                    >
                      Browse files
                    </span>
                  </p>
                </p>
              )}
            </div>
          </Card>
          <Button
            onClick={onSubmit}
            variant="contained"
            className={classes.coloredButton}
          >
            {props.audioData?.id ? 'Update Audio' : 'Add Audio'}
            <span style={{ marginTop: '7px' }}> </span>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadAudioDialog;
