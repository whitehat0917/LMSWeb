import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
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

const DragAndDropDialog = (props) => {
  const classes = useStyles();

  const { register, formState, trigger, getValues, setValue } = useFormContext();
  const [content, setContent] = React.useState(props.data?.content ? props.data.content : []);

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
          type: 'drag'
        });
      } else {
        props.onSubmit({
          id: 0,
          title: values.title,
          explanation: values.explanation,
          content: content,
          type: 'drag'
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
          Drag and Drop
        </DialogTitle>
        <p className={classes.paraheading}>
          <span>
            <img src="/images/np_info.svg"></img>
          </span>
          &nbsp;&nbsp;&nbsp;A list of possible answers are shown. Learner
          selects the correct options by dragging to a target. Use the
          &nbsp;&nbsp;&nbsp;checkboxes to indicate correct answers.
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
          <p className={classes.dialogpara}>Options</p>
          <Button
            autoFocus
            className={classes.optionButton}
            variant="outlined"
            onClick={handleAddOption}
          >
            Another Option
          </Button>
          <Grid container spacing={1}>
            {
              content.map((item, index) => (
                <Grid item>
                  <TextField
                    className={classes.fieldwidth}
                    placeholder="Enter text for this option"
                    variant="outlined"
                    size="small"
                    value={item}
                    onChange={e => handleOptionChange(e, index)}
                  />
                </Grid>
              ))
            }
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

export default DragAndDropDialog;
