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
import { useStyles } from './ui';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green, grey } from '@material-ui/core/colors';
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

const MultiChoice = (props) => {
  const classes = useStyles();
  const indexString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

  const handleAddOption = () => {
    let temp = [...content];
    temp.push("");
    setContent(temp);
  }

  const handleOptionChange = (e, index) => {
    const list = [...content];
    list[index] = e.target.value;
    setContent(list);
  };

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
          type: 'multichoice'
        });
      } else {
        props.onSubmit({
          id: 0,
          title: values.title,
          explanation: values.explanation,
          content: content,
          answer: answer,
          type: 'multichoice'
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
          Multiple Choice
        </DialogTitle>
        <p className={classes.paraheading}>
          <span style={{ margin: '1px', marginLeft: '-7px' }}>
            <img src="/images/np_info.svg" alt="info"></img>
          </span>
          &nbsp;&nbsp;&nbsp;Learner selects the correct answer(s) from a
          list of options. Use the checkboxes to indicate correct answers.
        </p>
        <DialogContent>
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
          <p
            className={classes.dialogpara}
            style={{ marginBottom: '-10px' }}
          >
            Options
          </p>
          <Button
            autoFocus
            className={classes.optionButton}
            variant="outlined"
            onClick={handleAddOption}
          >
            Another Option
          </Button>
          {
            content.map((item, index) => (
              <TextField
                className={classes.fieldwidth}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      classes={{
                        root: answer === index ? classes.inputAndorsmentA : classes.inputAndorsmentB,
                      }}
                    >
                      {indexString[index]}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <CheckCircleIcon style={{ cursor: 'pointer', color: answer === index ? green[500] : grey[500] }} onClick={() => setAnswer(index)} />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                value={item}
                onChange={e => handleOptionChange(e, index)}
              />
            ))
          }
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

export default MultiChoice;
