import Editor from '@element/Editor/Editor';
import { Box, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { EditorState } from 'draft-js';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Controller, useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import { useStyles } from './ui';

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

const CourseLesson = (props) => {
  const classes = useStyles();
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );

  const { register, formState, control, trigger, getValues, setValue } = useFormContext();

  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
    if (topicFormData?.id) {
      setValue('description', topicFormData.description);
    }
  }, [topicFormData]);
  
  const onSubmit = async () => {
    const valid = await trigger(['name', 'description']);
    console.log(getValues())
    if (valid) {
      const values = getValues();
    const description = values.description.getCurrentContent().getPlainText();
      if (topicFormData?.id) {
        props.onUpdateLesson(topicFormData.id, {
          name: values.name,
          description: description,
        });
      } else {
        props.onAddLesson({
          name: values.name,
          description: description,
        });
      }
    }
  };

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
      </Box>
    </>
  );
};

export default CourseLesson;
