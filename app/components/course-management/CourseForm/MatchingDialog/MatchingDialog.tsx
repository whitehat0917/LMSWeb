import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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

const MatchingDialog = (props) => {
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
    temp.push({ left: '', right: ''});
    setContent(temp);
  }

  const handleOptionChange = (e, index, type) => {
    const list = [...content];
    if (type === 'left'){
      list[index] = { ...list[index], left: e.target.value};
    }else{
      list[index] = { ...list[index], right: e.target.value};
    }
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
          answer: '',
          type: 'matching'
        });
      } else {
        props.onSubmit({
          id: 0,
          title: values.title,
          explanation: values.explanation,
          content: content,
          answer: '',
          type: 'matching'
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
          Matching
        </DialogTitle>
        <p className={classes.paraheading}>
          <span style={{ marginLeft: '-7px' }}>
            <img src="/images/np_info.svg"></img>
          </span>
          &nbsp;&nbsp;&nbsp;Learner matches correct pairs of answers
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
          {
            content.map((item, index) => (
              <>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <TextField
                    className={classes.fieldgrid}
                    placeholder="Enter an answer here"
                    variant="outlined"
                    size="medium"
                    value={item.left}
                    onChange={e => handleOptionChange(e, index, 'left')}
                  />
                  <Box mx={1} className={classes.boxflex}>
                    <ArrowForwardIcon />
                  </Box>
                  <TextField
                    className={classes.fieldgrid}
                    placeholder="Enter an answer here"
                    variant="outlined"
                    size="medium"
                    value={item.right}
                    onChange={e => handleOptionChange(e, index, 'right')}
                  />
                </Box>
                <br />
              </>
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

export default MatchingDialog;
