import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './ui';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import { useFormContext } from 'react-hook-form';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
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

const CourseLessonScenario = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const [selectedId, setSelectedId] = React.useState(-1);
  const [topicFormData] = useRecoilState(
    lessonTopicState
  );
  const [treeValues, setTreeValues] = React.useState([]);
  const [showBinaryTree, setShowBinaryTree] = React.useState(topicFormData.content ? true : false);
  const { register, formState, trigger, getValues, setValue } = useFormContext();
  const [open, setOpen] = React.useState(false);
  const [title1, setTitle1] = React.useState("");
  const [title2, setTitle2] = React.useState("");
  const [title3, setTitle3] = React.useState("");

  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
    if (topicFormData.content){
      let tempValues = [...JSON.parse(topicFormData.content)];
      for (let i=tempValues.length-1;i>-1;i--){
        for (let j=0;j<tempValues[i].length;j++){
          tempValues[i][j] = {...tempValues[i][j], tree: getTreeComponent(tempValues, i, j)}
        }
      }
      setTreeValues(tempValues);
    }
  }, [topicFormData]);
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onSubmit = async () => {
    const valid = await trigger(['name']);
    if (valid) {
      const values = getValues();
      if (topicFormData?.id) {
        props.onUpdateLesson(topicFormData.id, {
          name: values.name,
          content: JSON.stringify(treeValues),
        });
      } else {
        props.onAddLesson({
          name: values.name,
          content: JSON.stringify(treeValues),
        });
      }
    }
  }
  const handleAddTree = () => {
    let tempValues = [...treeValues];
    let nextId = getNextId();
    let tempArray = [];
    if (selectedId === -1){
      tempValues.push([{ id: nextId, depth: 0, parent: -1, children: true, title: getValues().rootTitle, tree: ''}]);
      nextId++;
      if (title1 !== ''){
        tempArray = tempArray.concat({ id: nextId, depth: 1, parent: 0, children: false, title: title1, tree: '' });
        nextId++;
      }
      if (title2 !== ''){
        tempArray = tempArray.concat({ id: nextId, depth: 1, parent: 0, children: false, title: title2, tree: '' });
        nextId++;
      }
      if (title3 !== ''){
        tempArray = tempArray.concat({ id: nextId, depth: 1, parent: 0, children: false, title: title3, tree: '' });
        nextId++;
      }
      tempValues.push(tempArray);
    }else{
      let tempDepth = 0;
      for (let i=0;i<tempValues.length;i++){
        for (let j=0;j<tempValues[i].length;j++){
          if (tempValues[i][j].id === selectedId){
            tempDepth = tempValues[i][j].depth + 1;
            tempValues[i][j] = {...tempValues[i][j], children: true};
            break;
          }
          if (tempDepth !== 0)
            break;
        }
      }
      if (title1 !== ''){
        tempArray = tempArray.concat({ id: nextId, depth: tempDepth, parent: selectedId, children: false, title: title1, tree: '' });
        nextId++;
      }
      if (title2 !== ''){
        tempArray = tempArray.concat({ id: nextId, depth: tempDepth, parent: selectedId, children: false, title: title2, tree: '' });
        nextId++;
      }
      if (title3 !== ''){
        tempArray = tempArray.concat({ id: nextId, depth: tempDepth, parent: selectedId, children: false, title: title3, tree: '' });
        nextId++;
      }
      if (tempDepth > tempValues.length - 1)
        tempValues.push(tempArray);
      else
        tempValues[tempDepth] = [...tempValues[tempDepth], ...tempArray];
    }
    for (let i=tempValues.length-1;i>-1;i--){
      for (let j=0;j<tempValues[i].length;j++){
        tempValues[i][j] = {...tempValues[i][j], tree: getTreeComponent(tempValues, i, j)}
      }
    }
    setTreeValues(tempValues);
    setTitle1('');
    setTitle2('');
    setTitle3('');
    setValue('rootTitle', '');
    setShowBinaryTree(true);
  }
  const getTreeComponent = (tempValues, i, j) => {
    if (tempValues[i][j].children === false){
      return (
        <li>
          <a className={classes.binaryChild}>
            {tempValues[i][j].title}
          </a>
          <ul>
            <li>
              <a className={classes.binaryChild} onClick={() => handleAddOpen(tempValues[i][j].id)}>
                Add a Segment
              </a>
            </li>
          </ul>
        </li>
      );
    }else{
      return (
        <li>
          <a className={classes.binaryChild}>
            {tempValues[i][j].title}
          </a>
          <ul>
            {
              tempValues[i+1].filter((item) => item.parent === tempValues[i][j].id).map((item) => (
                <>
                  {item.tree}
                </>
              ))
            }
          </ul>
        </li>
      );
    }
  }
  const handleAddOpen = (value) => {
    setSelectedId(value);
    setOpen(true);
  }
  const getNextId = () => {
    if (treeValues.length === 0){
      return 0;
    } else {
      return treeValues[treeValues.length - 1][treeValues[treeValues.length - 1].length - 1].id + 1;
    }
  }
  return (
    <>
      <Box className={classes.boxcolor}>
        <div className="lms-input">
          <label>Lesson Title</label>
          <input type="text" className={formState.errors?.name?.message ? 'error' : ''} {...register('name', { required: 'This field is required.' })} />
          {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
        </div>
      </Box>
      {!showBinaryTree ? (
        <Box className={classes.container}>
          <Box className={classes.box1}>
            <Box className="" style={{ marginTop: '-55px' }}>
              <Box className={classes.item1} mb={2.5}>
                <img src="/images/flow.svg" width="125px" height="145px"></img>
              </Box>
              <Box className={classes.item1}>
                <Button
                  onClick={handleClickOpen}
                  className={classes.coloredButton}
                  variant="contained"
                >
                  Add Opening Segment
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box className={classes.containerTree}>
            <Box className={classes.box1}>
              <div style={{ width: '100%' }} className="tree">
                {
                  treeValues.length > 0 &&
                  <ul>
                    {treeValues[0][0].tree}
                  </ul>
                }
              </div>
            </Box>
          </Box>
          <Button
            onClick={onSubmit}
            variant="contained"
            className={classes.coloredButton}
          >
            {topicFormData?.id ? 'Update Lesson' : 'Add Lesson'}
            <span style={{ marginTop: '7px' }}> </span>
          </Button>

          <Button
            onClick={props.onCancel}
            variant="contained"
            className={classes.coloredButton1}
          >
            Cancel
          </Button>
        </>
      )}
      <Dialog
        className={classes.boxDialog}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle
          classes={classes.dialogtitle}
          onClose={handleClose}
          className={classes.title}
        >
          Add Scenario Segment
        </DialogTitle>
        <DialogContent>
          <div className="lms-input">
            <label>Enter your statement, title or question</label>
            <input type="text" {...register('rootTitle', { required: 'This field is required.' })} />
          </div>
          <br />
          <p className={classes.dialogpara} style={{ marginBottom: '-10px' }}>
            Options
          </p>
          <TextField
            className={classes.fieldwidth}
            margin="normal"
            placeholder="Imperdiet nisi nullam"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  classes={{
                    root: classes.inputAndorsmentA,
                  }}
                >
                  A
                </InputAdornment>
              ),
            }}
            variant="outlined"
            value={title1}
            onChange={(e) => setTitle1(e.target.value)}
          />

          <TextField
            className={classes.fieldwidth}
            margin="normal"
            placeholder="Dolor aliquam massa"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  classes={{
                    root: classes.inputAndorsmentB,
                  }}
                >
                  B
                </InputAdornment>
              ),
            }}
            variant="outlined"
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
          />
          <br />
          <TextField
            placeholder="Add another option"
            variant="outlined"
            size="small"
            className={classes.fieldwidth}
            value={title3}
            onChange={(e) => setTitle3(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            className={classes.coloredButton1}
            onClick={() => {
              handleAddTree(), handleClose();
            }}
            variant="outlined"
          >
            Add Segment
          </Button>
        </DialogActions>{' '}
      </Dialog>
    </>
  );
};
export default CourseLessonScenario;
