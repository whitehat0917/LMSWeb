import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { IndividualStatus } from '@module/learner-management/reports/individualStatus';
import { lmsStyle } from 'styles/ui.variables';

const ReportStatus = ({ data }) => {
  return (
    <>
      <Box
        width="100%"
        boxShadow={`0px 3px 6px ${lmsStyle['box-shadow']}`}
        mt="20px"
        color={`${lmsStyle['base-secondary']}`}
        bgcolor="white"
        borderRadius="5px"
      >
        <Grid
          container
          spacing={6}
          justify="space-around"
          alignItems="center"
          direction="row"
        >
          {data.map((item, key) => (
            <IndividualStatus
              key={key}
              title={item.title}
              icon={item.icon}
              value={item.value}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ReportStatus;
