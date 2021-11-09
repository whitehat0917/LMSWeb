import React from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton, InputAdornment,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStyles } from './ui';
import { useFormContext } from 'react-hook-form';
import { green, grey } from '@material-ui/core/colors';

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

const TrueOrFalse = (props) => {
  const classes = useStyles();

  const { register, formState, trigger, getValues, setValue } = useFormContext();
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
          answer: answer,
          type: 'truefalse'
        });
      } else {
        props.onSubmit({
          id: 0,
          title: values.title,
          explanation: values.explanation,
          answer: answer,
          type: 'truefalse'
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
          True or False
        </DialogTitle>
        <p className={classes.paraheading}>
          <span>
            <img
              src="/images/np_info.svg"
              style={{ marginLeft: '-7px' }}
              alt="info"
            ></img>
          </span>
          &nbsp;&nbsp;&nbsp;Learner decides if the answer is true or false
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <span className={classes.positionRelative}>
                <TextField
                  placeholder="True"
                  variant="outlined"
                  value="True"
                  size="medium"
                  disabled
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CheckCircleIcon style={{ cursor: 'pointer', color: answer === 0 ? green[500] : grey[500] }} onClick={() => setAnswer(0)} />
                      </InputAdornment>
                    ),
                  }}
                />
              </span>
            </Grid>
            <Grid item xs={6}>
              <span className={classes.positionRelative}>
                <TextField
                  placeholder="False"
                  value="False"
                  variant="outlined"
                  size="medium"
                  disabled
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CheckCircleIcon style={{ cursor: 'pointer', color: answer === 1 ? green[500] : grey[500] }} onClick={() => setAnswer(1)} />
                      </InputAdornment>
                    ),
                  }}
                />
              </span>
            </Grid>
          </Grid>
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

export default TrueOrFalse;
