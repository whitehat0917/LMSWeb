import React from 'react';
import { Box } from '@material-ui/core';
import ReportStatus from '@module/learner-management/reports/status';
import ReportCourses from '@module/learner-management/reports/ReportCourses';
import Summary from '@module/learner-management/reports/summary';
import { carouselData } from '../../../data/mock';

const ReportActivity = ({ data }) => {
  return (
    <>
      <ReportStatus data={data} />
      <Box pt="40px">
        <ReportCourses
          title="Courses In Progress"
          btnTitle="Visit Course Reports"
          data={carouselData}
        />
      </Box>
      <ReportCourses title="Courses Assigned" btnTitle="" data={carouselData} />
      <Summary />
    </>
  );
};

export default ReportActivity;
