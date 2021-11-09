import React from 'react';
import { Box } from '@material-ui/core';
import ReportStatus from '@module/learner-management/reports/status';
import AssessmentResultTbl from './components/assessmentResultTbl';

const ReportAssessments = ({ data }) => {
  return (
    <Box>
      <ReportStatus data={data} />
      <AssessmentResultTbl />
    </Box>
  );
};
export default ReportAssessments;