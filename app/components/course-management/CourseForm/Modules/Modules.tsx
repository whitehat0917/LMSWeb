/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModuleFactory } from '@lms-api/factory';
import {
  Module,
} from '@lms-api/models';
import {
  Box, Button,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { courseFormState } from 'store/course';
import ModuleList from './list';
import ModuleAdd from './add';
import { useStyles } from './ui';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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

const Modules = ({ handleNext, handlePrev }) => {
  const classes = useStyles();
  const router = useRouter();
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [moduleData, setModuleData] = useState<Module[]>([]);
  const [moduleCurrent, setModuleCurrent] = useState<Module>();
  const authnInfo = useRecoilValue(authnState);
  const [courseFormData, setCourseFormData] = useRecoilState(
    courseFormState
  );


  if (!authnInfo.userInfo) {
    window.location.href = '/';
  }

  if (!courseFormData?.id) {
    router.push(`${GlobalUrls.ADMIN}/courses`);
  }

  React.useEffect(() => {
    const loadCourse = async () => {
      const data = await ModuleFactory.getAll(courseFormData.id);
      if (data) {
        setCourseFormData({ ...courseFormData, modules: data });
        setModuleData(data || []);
      }
    };

    if (courseFormData) {
      loadCourse();
      setModuleCurrent({ id: undefined, name: '', description: '', courseId: courseFormData.id, organizationId: courseFormData.organizationId });
    }
  }, [courseFormData]);

  const onAddNewLesson = () => {
    router.push(`${GlobalUrls.ADMIN}/courses/addLesson`);
  };

  return (
    <React.Fragment>
      <Box flexGrow={1}>
        <ModuleList modules={moduleData} openDialog={setDialogVisible} selectModule={setModuleCurrent} />
        <ModuleAdd module={moduleCurrent} moduleChange={setModuleCurrent} dialogOpened={dialogVisible} openDialog={setDialogVisible} />
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          onClick={handleNext}
          className={classes.nextButton}
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
          className={classes.prevButton}
        >
          Cancel
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default Modules;
