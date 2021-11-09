import React from 'react';
import { useRouter } from 'next/router';
import { Box } from '@material-ui/core';
import ReportCarouselIndex from '@module/learner-management/reports/reportCarouselIndex';
import SegmentHeader from '@element/segementHeader';

export default function ReportCourses({ title, btnTitle, data }) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/student/reports');
  };
  return (
    <Box mt="40px">
      <SegmentHeader
        data={{ title: title, btnTitle: btnTitle, type: 0 }}
        onClick={handleClick}
      />
      <Box mt="16px">
        <ReportCarouselIndex data={data} />
      </Box>
    </Box>
  );
}
