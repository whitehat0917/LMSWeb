import Select from '@element/Select/Select';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import TextInputWithChips from '@element/TextInputWithChips/TextInputWithChips';
import {
  CategoryFactory,
  CourseFactory,
  SubjectFactory,
  UploadFactory,
} from '@lms-api/factory';
import { Course, UploadDto } from '@lms-api/models';
import queryKeys from '@lms-api/queryKeys';
import {
  Box,
  Button,
  Card,
  FormLabel,
  Hidden,
  InputAdornment,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDropzone } from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { courseFormState } from 'store/course';
import LoadingView from '@module/elements/loading/loading-view';
import { useRouter } from 'next/router';
import { useStyles } from './ui';
import FormData from 'form-data';


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

export interface CourseFromInput {
  title: string;
  description?: string;
  objective?: string;
  categoryId: string;
  subjectId?: string;
  videoUrl?: string;
}

const CourseOverview = ({ handleNext, handlePrev }) => {
  const classes = useStyles();
  const authnInfo = useRecoilValue(authnState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [courseFormData, setCourseFormData] = useRecoilState<Course>(
    courseFormState
  );
  
  const { register, handleSubmit, control, formState, watch, setValue } = useForm();

  const router = useRouter();

  if (!authnInfo.userInfo) {
    window.location.href = '/';
  }


  useEffect(() => {
    const loadCourse = async () => {
      const data = await CourseFactory.get(authnInfo.userInfo?.organizationId, (router.query.id as string));
      if (data) {
        setValue('title', data.title);
        setValue('categoryId', data.categoryId);
        setValue('subjectId', data.subjectId);
        setValue('description', data.description);
        setValue('objective', data.objective);
        setValue('videoUrl', data.objective);
        watch('categoryId', data.categoryId);
        setCourseFormData({ ...useRecoilState, ...data });
      }
    };

    loadCourse();
  }, []);

  const categoriesQuery = useQuery(
    queryKeys.getCategoriesByOrgId(authnInfo.userInfo?.organizationId),
    () => CategoryFactory.getAll(authnInfo.userInfo?.organizationId)
  );

  const selectedCategoryId = watch('categoryId', null);

  const subjectsQuery = useQuery(
    queryKeys.getSubjectsByCategoryId(selectedCategoryId),
    () => {
      if (selectedCategoryId) {
        return SubjectFactory.getAll(selectedCategoryId);
      }
      return [];
    }
  );

  const createUploadMutation = useMutation(
    ({ containerName, folderName, fileData }: UploadDto) =>
      UploadFactory.create(containerName, folderName, fileData)
  );

  const [file, setFile] = useState<File>(null);
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      setFile(file);
    }
  }, []);

  const { getRootProps, getInputProps, open: handleFileUpload } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
  });

  const onSubmit = async (formData: CourseFromInput) => {
    let imageUrl;
    if (file) {
      const fileData = new FormData();
      fileData.append(
        'files',
        file,
        new Date().getTime() + '.' + file.name.split('.')[1]
      );
      imageUrl = await createUploadMutation.mutateAsync({
        containerName: 'assets',
        folderName: 'course',
        fileData: fileData,
      });
      //formData = { ...formData, imageUrl: imageUrl[0] };
      setImage(imageUrl[0]);
    }

    try {
      setIsLoading(true);
      let courseResponse = null;
      if (courseFormData?.id) {
        courseResponse = await CourseFactory.update(courseFormData.id, { ...formData });
      } else {
        courseResponse = await CourseFactory.create({
          organizationId: authnInfo.userInfo?.organizationId,
          authorId: authnInfo.userInfo.id,
          imageUrl: file ? imageUrl[0] : '',
          ...formData,
        });
      }

      setCourseFormData({ ...courseFormData, ...courseResponse });
      setIsLoading(false);
      handleNext();
    } catch (err) {
      setIsLoading(false);
      console.log(err.stack);
      setErrorMsg('Something went wrong. Internal server error');
    }
  };

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorMsg && <span className={classes.error}>{errorMsg}</span>}
      <Box>
        <Box>
          <Grid container spacing={3} className={classes.fieldsContainer}>
            <Grid item xs={12}>
              <div className="lms-input">
                <label>Course Name</label>
                <input type="text" className={formState.errors?.title?.message ? 'error' : ''} {...register('title', { required: 'This field is required.' })} />
                {formState.errors?.title?.message && <span>{formState.errors?.title?.message}</span>}
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Select
                native
                name="categoryId"
                {...register('categoryId', {
                  required: 'This field is required.',
                })}
                IconComponent={ExpandMoreIcon}
                placeholder="Select a category"
                label="Category"
                value={watch('categoryId')}
                error={!!formState.errors.categoryId?.message}
                helperText={formState.errors.categoryId?.message}
                variant="outlined"
                className={classes.formControl}
              >
                <option value="">
                  {categoriesQuery.isLoading
                    ? 'Loading...'
                    : 'Select a category'}
                </option>
                {categoriesQuery.isSuccess &&
                  categoriesQuery.data.map((dt) => (
                    <option key={dt.id} value={dt.id}>
                      {dt.name}
                    </option>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <Select
                native
                name="subjectId"
                {...register('subjectId')}
                IconComponent={ExpandMoreIcon}
                label="Subject"
                placeholder="Select a subject"
              >
                <option value="">
                  {subjectsQuery.isLoading ? 'Loading...' : 'Select a subject'}
                </option>
                {subjectsQuery.isSuccess &&
                  subjectsQuery.data.map((dt) => (
                    <option key={dt.id} value={dt.id}>
                      {dt.name}
                    </option>
                  ))}
              </Select>
            </Grid>


            <Hidden smDown>
              <Grid item xs={12} md={6} />
            </Hidden>

            <Grid className={classes.editorContainer} item xs={12} md={7}>
              {/* <TextInputOutline
                {...register('description')}
                name="description"
                label="Description"
                value={watch('description')}
                placeholder="Write Something"
                multiline
                rowsMax={20}
                rows={20}
                className={classes.textWrapper}
              /> */}
            <div className="lms-input">
              <label htmlFor="description">Description</label>
              <textarea name="description" {...register('description')} id="description" rows={20}></textarea>
            </div>
            </Grid>
            <Grid item xs={12} md={5} className={classes.paper}>
              <FormLabel className={classes.textcover}>Cover Photo</FormLabel>
              <Card className={classes.OverviewCard}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className={classes.dropbox}>
                    <img
                      // src="/images/Group 2.svg"
                      src={image ? image : '/images/Group 2.svg'}
                      className={classes.img}
                      width="98px"
                      height="103px"
                    />
                    {file && (
                      <Typography variant="caption" display="block">
                        {file.name}
                      </Typography>
                    )}
                    <p className={classes.pDrag}>Drag and drop files here</p>
                    <p style={{ marginTop: '10px' }}>
                      <span
                        onClick={handleFileUpload}
                        className={classes.browseFileText}
                      >
                        Browse files
                      </span>
                    </p>
                  </p>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} xl={6}>
              <Controller
                control={control}
                name="objective"
                {...register('objective')}
                render={({ field }) => (
                  <React.Fragment>
                    <TextInputWithChips
                      label={
                        <span>
                          Objectives{' '}
                          <span style={{ fontWeight: 'normal' }}>
                            (Separated by comma)
                          </span>
                        </span>
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputRef={field.ref}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </React.Fragment>
                )}
              />
            </Grid>
            <Grid item xs={12} md={6} />

            <Grid item xs={12} md={6} xl={6}>
              <div>
                <TextInputOutline
                  name="videoUrl"
                  {...register('videoUrl')}
                  label={
                    <span>
                      Intro Video Link{' '}
                      <span style={{ fontWeight: 'normal' }}>
                        (Supports YouTube, Vimeo, DailyMotion and Streamable)
                      </span>
                    </span>
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        classes={{
                          root: classes.inputAndorsment,
                        }}
                      >
                        https://
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} />
          </Grid>
        </Box>

        <Box mt={2}>
          <Button
            variant="contained"
            type="submit"
            className={classes.coloredButton}
            disabled={formState.isSubmitting}
          >
            next
            <span style={{ marginTop: '7px' }}>
              {' '}
              <ArrowForwardIcon />
            </span>
          </Button>
          <Button
            onClick={handlePrev}
            variant="contained"
            className={classes.coloredButton1}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default CourseOverview;


