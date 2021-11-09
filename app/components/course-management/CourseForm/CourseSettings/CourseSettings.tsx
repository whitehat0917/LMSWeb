import Select from '@element/Select/Select';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { LearningPathFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ArrowBack } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { courseCompletionReqTypes } from '@module/course-management/config';
import { GlobalUrls } from '@util/app-utils';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { authnState } from 'store';
import { courseFormDataState, courseFormStatusState } from 'store/course';
import { CourseSettingsInputs, CourseType } from '../formTypes';
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

export default function PricingAndAvailability(props) {
  const classes = useStyles();
  const [courseFormData, setCourseFormData] = useRecoilState(
    courseFormDataState
  );
  const router = useRouter();
  const authnInfo = useRecoilValue(authnState);
  const learningPathsQuery = useQuery(
    queryKeys.getLearningPathsByOrgId(authnInfo.userInfo?.organizationId),
    () => LearningPathFactory.getAll(authnInfo.userInfo?.organizationId)
  );
  const setCourseFormStatus = useSetRecoilState(courseFormStatusState);
  const [creatingCourse, setCreatingCourse] = useState(false);
  const { register, handleSubmit, control, formState } = useForm<
    CourseSettingsInputs
  >({
    defaultValues: {
      courseCompletionReq: {
        value: '',
        type: courseCompletionReqTypes[0].value,
      },
      ...courseFormData,
    },
  });

  useEffect(() => {
    if (creatingCourse) {
      console.log(courseFormData, 'course form data');
      props.handleNext();
    }
  }, [courseFormData]);

  const onSubmit = async (formData: CourseSettingsInputs) => {
    setCourseFormData((prev) => ({
      ...prev,
      ...formData,
    }));
    setCreatingCourse(true);

    router.push(`${GlobalUrls.ADMIN}/courses`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className={classes.leftInputsContainer}>
            <TextInputOutline
              name="price"
              label="Price"
              {...register('price', {
                required: 'This field is required.',
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: 'Invalid price.',
                },
                pattern: {
                  value: /^([0-9]*[.])?[0-9]+$/,
                  message: 'Invalid price',
                },
              })}
              error={!!formState.errors.price?.message}
              helperText={formState.errors.price?.message}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    classes={{
                      root: classes.inputAndorsment,
                    }}
                  >
                    <span>
                      <span>
                        <b>USD</b>
                      </span>
                      <ExpandMoreIcon />
                    </span>
                  </InputAdornment>
                ),
              }}
            />

            <TextInputOutline
              label="Publish Date"
              type="date"
              name="publishDate"
              {...register('publishDate', {
                required: 'This field is required.',
              })}
              error={!!formState.errors.publishDate?.message}
              helperText={formState.errors.publishDate?.message}
              size="small"
            />
            <Controller
              name="courseType"
              control={control}
              rules={{
                required: 'This field is required.',
              }}
              render={({ field }) => {
                return (
                  <React.Fragment>
                    <Select
                      label="Select Course Type"
                      error={!!formState.errors.courseType?.message}
                      helperText={formState.errors.courseType?.message}
                      native
                      onChange={field.onChange}
                      IconComponent={ExpandMoreIcon}
                      inputRef={field.ref}
                      placeholder="Select a course type"
                      defaultValue={field.value}
                    >
                      <option aria-label="None" value="">
                        Select a course type
                      </option>
                      {Object.values(CourseType).map((type) => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </Select>

                    {field.value === CourseType.SCHEDULED && (
                      <Box>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <TextInputOutline
                              type="date"
                              label="Start Date"
                              size="small"
                              name="schedule.startDate"
                              {...register('schedule.startDate', {
                                required: 'This field is required.',
                              })}
                              error={
                                !!formState.errors.schedule?.startDate?.message
                              }
                              helperText={
                                formState.errors.schedule?.startDate?.message
                              }
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextInputOutline
                              type="date"
                              label="End Date"
                              size="small"
                              name="schedule.endDate"
                              {...register('schedule.endDate', {
                                required: 'This field is required.',
                              })}
                              error={
                                !!formState.errors.schedule?.endDate?.message
                              }
                              helperText={
                                formState.errors.schedule?.endDate?.message
                              }
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </React.Fragment>
                );
              }}
            />
            <Select
              native
              error={!!formState.errors.learnerNavigation?.message}
              helperText={formState.errors.learnerNavigation?.message}
              label="Assign to Learning Path"
              className={classes.textField}
              IconComponent={ExpandMoreIcon}
              name="learnerNavigation"
              {...register('learnerNavigation', {
                required: 'This field is required.',
              })}
            >
              <option aria-label="None" value="" />
              {learningPathsQuery.isSuccess &&
                learningPathsQuery.data.map((dt) => (
                  <option key={dt.id} value={dt.id}>
                    {dt.name}
                  </option>
                ))}
            </Select>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="data:image/jpeg;base64,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"
                title="A Beginners Guide to Indoor Gardening"
                style={{ height: '220px' }}
              >
                <Button
                  onClick={() => {
                    setCourseFormStatus((prev) => ({
                      ...prev,
                      activeTabIndex: 0,
                    }));
                  }}
                  variant="contained"
                  className={classes.editbtn}
                >
                  Edit details
                </Button>
              </CardMedia>
              <Box
                height={235}
                padding={3.7}
                pb={2.7}
                className={classes.descriptionBox}
              >
                <Box mb={2}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.typo}
                  >
                    <b> A Beginners Guide to Indoor Gardening</b>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.iconCircle}
                  >
                    <AccountCircleIcon />
                    &nbsp; Marina Fernando
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      fontSize: '10px',
                      lineHeight: '2',
                      overflowY: 'auto',
                    }}
                  >
                    Want to learn more about houseplants? Have a bad track
                    record of killing plants? Not sure how to care for different
                    types of plants? This is the course for you.
                    <br /> <br />
                    Whether you are growing your plant collection to 50 or just
                    starting out with your first houseplant, our Houseplants 101
                    course will shape you into a confident, comfortable
                    houseplant parent. Our course is structured to cover a wide
                    range of topics, from the basics of plant structure, to
                    fighting off pestiferous bugs!
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <FormControl error={!!formState.errors.termsAccepted?.message}>
        <div className={classes.checkbox}>
          <Checkbox
            className={classes.cbox}
            color="primary"
            name="termsAccepted"
            id="termsAccepted"
            {...register('termsAccepted', {
              required: 'Please accept terms.',
            })}
          />
          <br />
          <br />
          <br />
          <br />
          <FormLabel htmlFor="termsAccepted" className={classes.para}>
            Aliquam in bibendum mauris. Sed vitae erat vel velit blandit
            pharetra vitae nec ante. Cras at est augue. Cras ut interdum elit.
            Ut malesuada a urna sit amet blandit. Nullam nunc lorem, aliquam at
            eros laoreet, feugiat bibendum ligula. Aenean congue, massa id
            aliquet semper, ligula ante tristique nulla, quis posuere dui purus
            vel urna. Nullam varius, magna nec egestas convallis, orci ex tempus
            quam, id finibus arcu ipsum fringilla purus.
          </FormLabel>
        </div>
        <FormHelperText>
          {formState.errors.termsAccepted?.message}
        </FormHelperText>
      </FormControl>
      <div className={classes.outsidebtn}>
        <Button
          variant="contained"
          className={classes.coloredButton}
          type="submit"
          style={{ marginRight: '10px' }}
          onClick={props.handleBack}
        >
          <span style={{ marginTop: '7px' }}>
            <ArrowBack />
          </span>
          back
        </Button>
        <Button
          variant="contained"
          className={classes.coloredButton}
          type="submit"
        >
          Create Course
          <span style={{ marginTop: '5px', marginLeft: '5px' }}>
            <img src="/images/np_tick.svg" height="14px" width="14px"></img>
          </span>
        </Button>

        <Button
          onClick={props.handlePrev}
          variant="contained"
          className={classes.coloredButton1}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
