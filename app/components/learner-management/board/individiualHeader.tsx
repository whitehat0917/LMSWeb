import React from 'react';
import { Grid } from '@material-ui/core';
import BoardStat from '@module/learner-management/board/boardStat';
import { boardAdsData, individualBoardData } from '../../../data/mock';
import BoardAds from '@module/learner-management/board/boardAds';

const IndividualHeader = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8}>
              <BoardStat info={individualBoardData[0]} link={false} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <BoardStat info={individualBoardData[1]} link={false} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <BoardAds info={boardAdsData} />
        </Grid>
      </Grid>
    </>
  );
};

export default IndividualHeader;
