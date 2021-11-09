import { Box, Button, Card, FormLabel } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useStyles } from './ui';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { Controller, useFormContext } from 'react-hook-form';
import Typography from '@material-ui/core/Typography';
import { useMutation } from 'react-query';
import { UploadDto } from '@lms-api/models/common.model';
import { UploadFactory } from '@lms-api/factory';
import FormData from 'form-data';
import Grid from '@material-ui/core/Grid';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import { EditorState } from 'draft-js';
import Editor from '@element/Editor/Editor';

const CourseLessonAttach = (props) => {
  const [file, setFile] = useState<File>(null);
  const [fileData, setFileData] = React.useState({});
  const classes = useStyles();
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );

  const { register, formState, control, trigger, getValues, setValue } = useFormContext();

  const [attachmentFiles, setAttachmentFiles] = React.useState(
    topicFormData.content ? JSON.parse(topicFormData.content) : []
  );

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
      const fileUrl = await createUploadMutation.mutateAsync({
        containerName: 'assets',
        folderName: 'course',
        fileData: fileData,
      });
      setFileData({
        id: attachmentFiles.length + 1,
        name: file.name,
        url: fileUrl[0],
        type: file.name.split('.')[file.name.split('.').length - 1],
      });
      setFile(file);
    }
  }, []);

  useEffect(() => {
    if (file) {
      const tempFiles = attachmentFiles.concat(fileData);
      setAttachmentFiles(tempFiles);
    }
    
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
    if (topicFormData?.id) {
      setValue('description', topicFormData.description);
    }
  }, [file, topicFormData]);
  

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: handleFileUpload,
  } = useDropzone({
    onDrop,
    accept: 'application/*',
    noClick: true,
    noKeyboard: true,
  });

  const handleDeleteFile = (index) => {
    const tempFiles = [...attachmentFiles];
    tempFiles.splice(index, 1);
    setAttachmentFiles(tempFiles);
  };

  const onSubmit = async () => {
    const values = getValues();

    console.log('-props-', props, values);

    const valid = await trigger(['name', 'description']);
    if (valid) {
      const values = getValues();
      if (topicFormData?.id) {
        props.onUpdateLesson(topicFormData.id, {
          name: values.name,
          description: values.description.getCurrentContent().getPlainText(),
          content: JSON.stringify(attachmentFiles),
        });
      } else {
        props.onAddLesson({
          name: values.name,
          description: values.description.getCurrentContent().getPlainText(),
          content: JSON.stringify(attachmentFiles),
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
        <br />
        <FormLabel className={classes.textcover}>Cover Photo</FormLabel>
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
                  width="91px"
                  height="80px"
                ></img>
                {file && (
                  <Typography variant="caption" display="block" align="center">
                    {file.name}
                  </Typography>
                )}
                <p className={classes.pDrag}>Drag and drop your files here</p>
                <p className={classes.pDrag}>
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
        <Box mt={2}>
          <Grid container spacing={3}>
            {attachmentFiles.map((item, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
                className="cursor"
                style={{ padding: '6px 12px' }}
                onClick={() => handleDeleteFile(index)}
              >
                <Box className={classes.fileItem}>
                  <Box display="flex" alignItems="center">
                    {item.type === 'pdf' && (
                      <img src="/images/course/pdf_icon.svg" />
                    )}
                    {item.type === 'xls' && (
                      <img src="/images/course/xls_icon.svg" />
                    )}
                    {item.name}
                  </Box>
                  <Box fontSize="12px" color="#D0415A">
                    DELETE
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button
          variant="contained"
          className={classes.coloredButton}
          onClick={onSubmit}
        >
          {topicFormData?.id ? 'Update Lesson' : 'Add Lesson'}
          <span style={{ marginTop: '7px' }}> </span>
        </Button>
        <Button
          variant="contained"
          className={classes.coloredButton1}
          onClick={props.onCancel}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default CourseLessonAttach;
