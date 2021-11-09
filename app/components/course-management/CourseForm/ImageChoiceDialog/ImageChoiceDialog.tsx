import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green, grey } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import styles from '@module/course-management/CourseForm/Model.module.scss';
import { useStyles } from './ui';
import FormData from 'form-data';
import { useMutation } from 'react-query';
import { UploadDto } from '@lms-api/models';
import { UploadFactory } from '@lms-api/factory';
import { useFormContext } from 'react-hook-form';

// dialog box code
const DialogTitle = (props) => {
  const { children, classes, onClose, ...other } = props;
  console.log(onClose, 'onClose');

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

const ImageChoiceDialog = (props) => {
  const classes = useStyles();
  const indexString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [image, setImage] = useState('');
  const { register, formState, trigger, getValues, setValue } = useFormContext();
  const [content, setContent] = React.useState(props.data?.content ? props.data.content : []);
  const [answer, setAnswer] = React.useState(props.data?.answer ? props.data.answer : 0);

  React.useEffect(() => {
    if (props.data?.id) {
      setValue('title', props.data.title);
      setValue('explanation', props.data.explanation);
    }else{
      setValue('title', '');
      setValue('explanation', '');
    }
  }, []);

  const createUploadMutation = useMutation(
    ({ containerName, folderName, fileData }: UploadDto) =>
      UploadFactory.create(containerName, folderName, fileData)
  );

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      const fileData = new FormData();
      fileData.append(
        'files',
        file,
        new Date().getTime() + '.' + file.name.split('.')[1]
      );
      const imageUrl = await createUploadMutation.mutateAsync({
        containerName: 'assets',
        folderName: 'course',
        fileData: fileData,
      });
      setImage(imageUrl[0]);
      setContent([...content, imageUrl[0]]);
    }
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: handleFileUpload,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
  });

  const onSubmit = async () => {
    const valid = await trigger(['title', 'explanation']);

    if (valid) {
      const values = getValues();
      props.setOpen(false);
      if (props.data?.id) {
        props.onSubmit({
          id: props.data.id,
          title: values.title,
          explanation: values.explanation,
          content: content,
          answer: answer,
          type: 'image'
        });
      } else {
        props.onSubmit({
          id: 0,
          title: values.title,
          explanation: values.explanation,
          content: content,
          answer: answer,
          type: 'image'
        });
      }
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
          Multiple Image Choice
        </DialogTitle>
        <p className={classes.paraheading}>
          <span>
            <img src="/images/np_info.svg" alt="info"></img>
          </span>
          &nbsp;&nbsp;&nbsp;Learner chooses the correct image(s) from a list of
          options. Use the checkboxes to indicate correct answers.
        </p>
        <DialogContent className={classes.dialogheight}>
          <div className="lms-input">
            <label>Enter your question</label>
            <input type="text" className={formState.errors?.title?.message ? 'error' : ''} {...register('title', { required: 'This field is required.' })} />
            {formState.errors?.title?.message && <span>{formState.errors?.title?.message}</span>}
          </div>
          <br />
          <div className="lms-input">
            <label htmlFor="explanation">Explanation</label>
            <textarea name="explanation" {...register('explanation')} rows={4}></textarea>
          </div>
          <p className={classes.dialogpara}>Options</p>
          {
            content.map((item, index) => (
              <>
                <Card className={classes.card} onClick={() => setAnswer(index)} >
                  <CardHeader
                    className={classes.cardtitle}
                    title={indexString[index]}
                    action={<CheckCircleIcon style={{ color: answer === index ? green[500] : grey[500] }} />}
                  />
                  <CardMedia
                    className={classes.media}
                    image={item}
                    title="Paella dish"
                  />
                </Card>
                <br />
              </>
            ))
          }
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
                  {image && (
                    <Typography variant="caption" display="block" align="center">
                      {image}
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
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            className={classes.coloredButton1}
            variant="outlined"
            onClick={onSubmit}
          >
            {props.data?.id ? 'Update Question' : 'Add Question'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageChoiceDialog;
