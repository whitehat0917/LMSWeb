import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Stat from '@module/learner-management/home/component/stat';
import { TotalStatsInfo } from 'data/mock';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      padding: '35px 30px 35px 30px',
      color: '#16395B',
    },
  })
);
const TotalStats = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Box fontSize="14px" fontWeight="600" mb="10px">
        Quick Stats
      </Box>
      <Grid container spacing={4}>
        {TotalStatsInfo.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Stat info={item} link={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TotalStats;
