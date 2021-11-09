import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import {
  LearningPathFactory,
} from '@lms-api/factory';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  FormLabel,
  Hidden,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { learningPathState } from 'store/course';
import { authnState } from 'store';
import { useStyles } from './ui';
import LoadingView from '@module/elements/loading/loading-view';
import restClient from '@lms-api/RestClient';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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

const LearningOverview = ({ organizationId, ...props }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [learningFormData, setlearningFormData] = useRecoilState(
    learningPathState
  );
  const router = useRouter();

  const [file, setFile] = useState<File>(null);
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'At least 3 characters'),
    description: Yup.string(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset, setValue } = useForm<{
    name: string;
    description: string;
  }>(formOptions);

  const id = router.query;
  useEffect(() => {
    // const organizationId = authnInfo.userInfo?.organizationId;

    if (id.id && id.id.length > 0) {
      LearningPathFactory.getOneByOrgId(organizationId, id.id as string).then((res) => {
        if (res) {
          if (res.coverUrl) {
            setImage(res.coverUrl);
          }
          setlearningFormData({ ...res[0] });
          setValue('name', res.name);
          setValue('description', res.description);
        }
      });
    }
  }, []);

  useEffect(() => {
    reset({});
    setlearningFormData({
      name: '',
      description: '',
      organizationId: organizationId
    });
  }, []);

  useEffect(() => {
    if (learningFormData) {
      if (learningFormData.coverUrl) {
        setImage(learningFormData.coverUrl);
      }
      setValue('name', learningFormData.name);
      setValue('description', learningFormData.description);
    }
  }, [learningFormData]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      console.log(file, 'uploading image file');
      setFile(file);
      const formData = new FormData();
      formData.append(
        'files',
        file,
        new Date().getTime() + '.' + file.name.split('.')[1]
      );
      restClient
        .commonPost(
          'Storage/Upload?containerName=assets&folderName=course',
          formData
        )
        .then((res) => {
          setImage(res.data[0]);
        });
    }
  }, []);

  const { getRootProps, getInputProps, open: handleFileUpload } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
  });

  const onSubmit = async (formData: { name: string; description: string }) => {
    setErrorMsg(null);
    try {
      let course;
      setIsLoading(true);
      if (learningFormData?.id) {
        course = await LearningPathFactory.update(learningFormData.id, {
          organizationId: organizationId,
          coverUrl: image,
          ...formData,
        });
      } else {
        course = await LearningPathFactory.create({
          organizationId: organizationId,
          coverUrl: image,
          ...formData,
        });
        setIsLoading(false);
        setlearningFormData({ ...learningFormData, ...course });
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMsg('Authentication failed!.');
      reset();
    }

    if (learningFormData.id) {
      props.showToaster(
        `Learning Path ${formData.name} was successfully updated `
      );
    } else {
      props.showToaster(
        `Learning Path ${formData.name} was successfully created `
      );
    }
    props.changeActiveTab(1);
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
              <TextInputOutline
                label="Learning Path Name"
                fullWidth
                name="name"
                {...register('name', {
                  required: 'This field is required.',
                  minLength: 3,
                })}
                error={!!formState.errors.name?.message}
                helperText={formState.errors.name?.message}
              />
            </Grid>

            <Hidden smDown>
              <Grid item xs={12} md={6} />
            </Hidden>

            <Grid className={classes.editorContainer} item xs={12} md={7}>
              <TextInputOutline
                {...register('description')}
                name="description"
                label="Description"
                multiline
                rowsMax={20}
                rows={20}
              />
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
                    <p className={classes.pDrag2}>
                      You can upload JPG and PNG image
                    </p>
                    <p className={classes.pDrag1}>
                      {' '}
                      files. Max file size of 3 MB
                    </p>
                    <p style={{ marginTop: '-8px' }}>
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
          </Grid>
        </Box>

        <Box mt={2}>
          <Button
            variant="contained"
            type="submit"
            className={classes.coloredButton}
            disabled={formState.isSubmitting}
          >
            {learningFormData && learningFormData.id
              ? 'Update Learning Path'
              : 'Create Learning Path'}
          </Button>
          <Button
            onClick={props.handleClose}
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

export default LearningOverview;
