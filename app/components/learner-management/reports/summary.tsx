import React, { useState } from 'react';
import { Box, Button, createStyles, makeStyles } from '@material-ui/core';
import LearningPaths from './learningPaths';
import MyCourses from '@module/learner-management/reports/myCourses';
import { lmsStyle } from 'styles/ui.variables';

const useStyle = makeStyles(createStyles({
  fieldBtn: {
    textTransform: 'none',
    borderColor: 'white',
  },
}));
const Summary = () => {

  const [selected, setSelected] = useState(false);

  const handleCourse = () => {
    setSelected(false);
  };

  const handleLearningPath = () => {
    setSelected(true);
  };
  const classes = useStyle();
  return (
    <Box mt="60px" mb="10px">
      <Box display="flex" alignItems="center" mb="28px">
        <Box
          fontSize="14px"
          fontWeight="600"
          color={`${lmsStyle['base-secondary']}`}
          mr="22px"
        >
          Summary
        </Box>
        <Box>
          <Button
            color="primary"
            variant={!selected ? 'contained' : 'outlined'}
            className={classes.fieldBtn}
            onClick={handleCourse}
          >
            My Courses
          </Button>
          <Button
            color="primary"
            variant={selected ? 'contained' : 'outlined'}
            className={classes.fieldBtn}
            onClick={handleLearningPath}
          >
            Learning Paths
          </Button>
        </Box>
      </Box>
      {selected ? <LearningPaths /> : <MyCourses />}
    </Box>
  );
};

export default Summary;
