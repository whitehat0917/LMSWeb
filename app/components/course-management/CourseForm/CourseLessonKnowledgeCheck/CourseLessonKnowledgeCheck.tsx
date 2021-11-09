import React from 'react';
import dynamic from 'next/dynamic'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import DragAndDropDialog from '../DragandDropDialog/DragandDropDialog';
import ImageChoiceDialog from '../ImageChoiceDialog/ImageChoiceDialog';
import MatchingDialog from '../MatchingDialog/MatchingDialog';
import TextDialog from '../TextDialog/TextDialog';
import TrueOrFalseDialog from '../TrueorFalseDialog/TrueorFalseDialog';
import MultiChoiceDialog from '../MultiChoiceDialog/MultiChoiceDialog';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from '@module/course-management/CourseForm/Model.module.scss';
import { useStyles } from './ui';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import { Controller, useFormContext } from 'react-hook-form';
import { EditorState } from 'draft-js';
import Editor from '@element/Editor/Editor';

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

const KnowledgeCheck = () => {
  const [loaded, setLoaded] = React.useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openMultiChoiceDialog, setOpenMultiChoiceDialog] = React.useState(false);
  const [openTrueFalseDialog, setOpenTrueFalseDialog] = React.useState(false);
  const [openDragDialog, setOpenDragDialog] = React.useState(false);
  const [openMultipleImage, setOpenMultipleImage] = React.useState(false);
  const [openMatching, setOpenMatching] = React.useState(false);
  const [openText, setOpenText] = React.useState(false);
  const [questionData, setQuestionData] = React.useState({});
  const [questionDatas, setQuestionDatas] = React.useState([]);
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );

  const { register, formState, control, trigger, getValues, setValue } = useFormContext();
  
  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
  }, [topicFormData]);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditQuestion = (index) => {
    setQuestionData(questionDatas[index]);
    switch (questionDatas[index].type){
      case 'multichoice':
        setOpenMultiChoiceDialog(true);
        break;
      case 'truefalse':
        setOpenTrueFalseDialog(true);
        break;
      case 'drag':
        setOpenDragDialog(true);
        break;
      case 'image':
        setOpenMultipleImage(true);
        break;
      case 'matching':
        setOpenMatching(true);
        break;
      case 'text':
        setOpenText(true);
        break;
    }
  }

  const handleAddQuestion = (data) => {
    if (data.id === 0) {
      setQuestionDatas([...questionDatas, { ...data, id: questionDatas.length + 1 }]);
    } else {
      const tempQuestionDatas = questionDatas.map((item) => {
        const returnValue = { ...item };
        if (item.id === data.id) {
          returnValue.title = data.title;
          returnValue.explanation = data.explanation;
          returnValue.content = data.content;
          returnValue.answer = data.answer;
        }
        return returnValue;
      });
      setQuestionDatas(tempQuestionDatas);
    }
  };

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Box className={classes.boxcolor}>
        <div className="lms-input">
          <label>Lesson Title</label>
          <input type="text" className={formState.errors?.name?.message ? 'error' : ''} {...register('name', { required: 'This field is required.' })} />
          {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            {...register('description', {
              required: 'This field is required.',
            })}
            defaultValue={EditorState ? EditorState.createEmpty() : ''}
            render={({ field, formState }) => {
              return (
                <Editor
                  label="Lesson Description"
                  value={field.value}
                  onChange={field.onChange}
                  error={!!formState.errors?.description?.message}
                  helperText={formState.errors?.description?.message}
                />
              );
            }}
          />
        </div>
        <Grid style={{ marginBottom: '10px' }}>
          <Grid>
            <p className={classes.pQ}>Questions</p>
          </Grid>
          <Button onClick={handleClickOpen} className={classes.editbtn}>
            <AddCircleIcon className={classes.plusIcon} viewBox="0 0 36 24" />
            Add Question
          </Button>
        </Grid>
        <Divider />
        <div>
          {
            questionDatas.length === 0 &&
              <>
                <div className={styles.imgAddLesson}>
                  <img src="/images/list.svg" alt="list" />
                </div>
                <Button
                  variant="contained"
                  className={classes.coloredButton}
                  onClick={handleClickOpen}
                >
                  Add Questions
                </Button>
              </>
          }
          <Dialog
            className={classes.boxDialog}
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle
              classes={classes.dialogtitle}
              onClose={handleClose}
              className={classes.title}
            >
              Select a Question Type
            </DialogTitle>
            <DialogContent>
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Grid
                  className={styles.modelcardgrid}
                  onClick={() => {
                    setQuestionData({});
                    setOpenMultiChoiceDialog(true);
                    setOpen(false);
                  }}
                >
                  <img
                    src="/images/np_multiple.svg"
                    className={styles.imgselect}
                    alt="multiple"
                  ></img>
                  <p className={styles.pmodel}>Multiple Choice</p>
                </Grid>
                <Grid
                  className={styles.modelcardgrid}
                  onClick={() => {
                    setQuestionData({});
                    setOpenTrueFalseDialog(true);
                    setOpen(false);
                  }}
                >
                  <img
                    src="/images/np_trueor.svg"
                    className={styles.imgselect}
                    alt="trueor"
                  ></img>
                  <p className={styles.pmodel}>True or False</p>
                </Grid>
                <Grid
                  className={styles.modelcardgrid}
                  onClick={() => {
                    setQuestionData({});
                    setOpenDragDialog(true);
                    setOpen(false);
                  }}
                >
                  <img
                    src="/images/np_drag.svg"
                    className={styles.imgselect}
                    alt="drag"
                  ></img>
                  <p className={styles.pmodel}>Drag and Drop</p>
                </Grid>
              </Grid>
              <Grid
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Grid
                  className={styles.modelcardgrid}
                  onClick={() => {
                    setQuestionData({});
                    setOpenMultipleImage(true);
                    setOpen(false);
                  }}
                >
                  <img
                    src="/images/Group 57.svg"
                    className={styles.imgselect}
                    alt="group"
                  ></img>
                  <p className={styles.pmodel}>Multiple Image Choice</p>
                </Grid>
                <Grid
                  className={styles.modelcardgrid}
                  onClick={() => {
                    setQuestionData({});
                    setOpenMatching(true);
                    setOpen(false);
                  }}
                >
                  <img
                    src="/images/np_sorting.svg"
                    className={styles.imgselect}
                    alt="sorting"
                  ></img>
                  <p className={styles.pmodel}>Matching</p>
                </Grid>
                <Grid
                  className={styles.modelcardgrid}
                  onClick={() => {
                    setQuestionData({});
                    setOpenText(true);
                    setOpen(false);
                  }}
                >
                  <img
                    src="/images/np_textbar.svg"
                    className={styles.imgselect}
                    alt="textbar"
                  ></img>
                  <p className={styles.pmodel}>Text Input</p>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
          {
            openMultiChoiceDialog &&
            <MultiChoiceDialog
              open={openMultiChoiceDialog}
              setOpen={setOpenMultiChoiceDialog}
              data={questionData}
              onSubmit={handleAddQuestion}
            />
          }
          {
            openTrueFalseDialog &&
            <TrueOrFalseDialog
              open={openTrueFalseDialog}
              setOpen={setOpenTrueFalseDialog}
              data={questionData}
              onSubmit={handleAddQuestion}
            />
          }
          {
            openDragDialog &&
            <DragAndDropDialog
              open={openDragDialog}
              setOpen={setOpenDragDialog}
              data={questionData}
              onSubmit={handleAddQuestion}
            />
          }
          {
            openMultipleImage &&
            <ImageChoiceDialog
              open={openMultipleImage}
              setOpen={setOpenMultipleImage}
              data={questionData}
              onSubmit={handleAddQuestion}
            />
          }
          {
            openMatching &&
            <MatchingDialog
              open={openMatching}
              setOpen={setOpenMatching}
              data={questionData}
              onSubmit={handleAddQuestion}
            />
          }
          {
            openText &&
            <TextDialog
              open={openText}
              setOpen={setOpenText}
              data={questionData}
              onSubmit={handleAddQuestion}
            />
          }
        </div>
        {
          questionDatas.map((item, index) => (
            <Grid className={classes.boxHeight}>
              <div className={classes.lessonListLeftBox}>
                <p className={''}>{item.id}</p>
                <div className={classes.lessonList}>
                  <p className={classes.lessonListTitle}>{item.title}</p>
                  <p className={classes.lessonListDescription}>
                    {item.explanation}
                  </p>
                </div>
              </div>
              <div className={classes.btn}>
                <Button className={classes.Deletebtn}>Delete</Button>
                <Button className={classes.Editbtn} onClick={() => handleEditQuestion(index)}> Edit</Button>
              </div>
            </Grid>
          ))
        }
      </Box>
    </>
  );
};

export default KnowledgeCheck;
