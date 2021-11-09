import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useStyles } from './ui';
import { useFormContext } from 'react-hook-form';

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

const TextDialog = (props) => {
  const classes = useStyles();

  const { register, formState, trigger, getValues, setValue } = useFormContext();
  const [content, setContent] = React.useState(props.data?.content ? props.data.content : true);

  React.useEffect(() => {
    if (props.data?.id) {
      setValue('title', props.data.title);
      setValue('explanation', props.data.explanation);
      setValue('answer', props.data.answer);
    }else{
      setValue('title', '');
      setValue('explanation', '');
      setValue('answer', '');
    }
  }, []);

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
          answer: values.answer,
          type: 'text'
        });
      } else {
        props.onSubmit({
          id: 0,
          title: values.title,
          explanation: values.explanation,
          content: content,
          answer: values.answer,
          type: 'text'
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
          Text
        </DialogTitle>
        <p className={classes.paraheading}>
          <span>
            <img src="/images/np_info.svg"></img>
          </span>
          &nbsp;&nbsp;&nbsp;Learner has to type out the exact answer.
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
          <br />
          <div className="lms-input">
            <label htmlFor="answer">Answer</label>
            <textarea name="answer" {...register('answer')} rows={4}></textarea>
          </div>
          <div className={classes.checkbox}>
            <Checkbox
              defaultChecked
              className={classes.cbox}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onChange={e => setContent(e.target.checked)}
            />
            <br />
            <br />
            <br />
            <br />
            <p className={classes.para}>Answer is case sensitive</p>
          </div>
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

export default TextDialog;
