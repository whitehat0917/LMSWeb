import useToastMessages from '@hook/useToastMessages';
import { Box, Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Audience from '@module/course-management/CourseForm/Audience/Audience';
import Quizzes from '@module/quizzes/index';
import CourseOverview from '@module/course-management/CourseForm/CourseOverview/CourseOverview';
import CourseSettings from '@module/course-management/CourseForm/CourseSettings/CourseSettings';
import Modules from '@module/course-management/CourseForm/Modules/Modules';
import { GlobalUrls } from '@util/app-utils';
import styles from 'components/course-management/CourseForm/Course.module.scss';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { courseFormState, courseFormStatusState } from 'store/course';
import { useStyles } from './ui';

function TabPanel(props) {
  const { children, value, index, className = '', ...other } = props;

  if (value !== index) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className={className}
      {...other}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  className: PropTypes.any,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const steps = [
  { label: 'Course Overview', Component: CourseOverview },
  { label: 'Modules', Component: Modules },
  { label: 'Audience', Component: Audience },
  { label: 'Quizzes', Component: Quizzes },
  { label: 'Course Settings', Component: CourseSettings },
];

const CreateNewCourse = () => {
  const classes = useStyles();
  const router = useRouter();
  const toastMessages = useToastMessages();
  const [{ activeTabIndex }, setCourseFormStatus] = useRecoilState(
    courseFormStatusState
  );
  // const [courseFormData] = useRecoilState(courseFormDataState);
  const [courseFormData] = useRecoilState(courseFormState);

  const handleChange = (event, newValue) => {
    //console.log(courseFormData, '---courseFormData---74');
    if (
      courseFormData &&
      courseFormData?.id
    ) {
      setCourseFormStatus((prev) => ({
        ...prev,
        activeTabIndex: newValue,
      }));
    }
    // if (
    //   activeTabIndex == 0 &&
    //   courseFormData.title &&
    //   courseFormData.categoryId
    // ) {
    //   setCourseFormStatus((prev) => ({
    //     ...prev,
    //     activeTabIndex: newValue,
    //   }));
    // }

    // if (
    //   activeTabIndex == 1 &&
    //   courseFormData.modules &&
    //   courseFormData.modules.length > 0
    // ) {
    //   setCourseFormStatus((prev) => ({
    //     ...prev,
    //     activeTabIndex: newValue,
    //   }));
    // }

    // if (activeTabIndex >= 2) {
    //   setCourseFormStatus((prev) => ({
    //     ...prev,
    //     activeTabIndex: newValue,
    //   }));
    // }
  };

  const handleFinish = async () => {
    toastMessages.push({
      message:
        'Course A Beginners Guide to Indoor Gardening was successfully created',
    });
    router.push(`${GlobalUrls.ADMIN}/courses`);
  };

  return (
    <>
      <Grid container className={styles.gridcourseform}>
        <h3 className={styles.heading}>Create New Course</h3>
        <Button variant="contained" className={classes.coloredButton}>
          <img src="/images/glasses.svg" />
          &nbsp;&nbsp;&nbsp;&nbsp; Preview Course
        </Button>
      </Grid>

      <Box flexGrow={1} bgcolor="white" display="flex" flexDirection="column">
        <AppBar position="static" className={classes.Tabcolor}>
          <Tabs
            value={activeTabIndex}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {steps.map(({ label }, idx) => (
              <Tab
                key={label}
                color="primary"
                className={classes.Tabtext}
                label={label}
                {...a11yProps(idx)}
              />
            ))}
          </Tabs>
        </AppBar>

        {steps.map(
          (
            {
              label,
              Component,
            }: {
              label: string;
              Component: FC<{
                handleBack: CallableFunction;
                handlePrev: CallableFunction;
                handleNext: CallableFunction;
              }>;
            },
            idx
          ) => (
            <TabPanel
              key={label}
              className={classes.tabwidth}
              value={activeTabIndex}
              index={idx}
            >
              <Component
                handleBack={() => {
                  if (idx > 0) {
                    setCourseFormStatus((prev) => ({
                      ...prev,
                      activeTabIndex: prev.activeTabIndex - 1,
                    }));
                  }
                }}
                handlePrev={() => {
                  if (idx === 0) {
                    router.push(`${GlobalUrls.ADMIN}`);
                  } else {
                    setCourseFormStatus((prev) => ({
                      ...prev,
                      activeTabIndex: 0,
                    }));
                  }
                }}
                handleNext={() => {
                  if (idx !== steps.length - 1) {
                    setCourseFormStatus((prev) => ({
                      ...prev,
                      activeTabIndex: prev.activeTabIndex + 1,
                    }));
                  } else {
                    handleFinish();
                  }
                }}
              />
            </TabPanel>
          )
        )}
      </Box>
    </>
  );
};

export default CreateNewCourse;
