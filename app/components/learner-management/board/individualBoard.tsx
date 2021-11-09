import React from 'react';
import { Box } from '@material-ui/core';
import IndividualHeader from '@module/learner-management/board/individiualHeader';
import LeaderBoard from './leaderBoard';
import TrophyCabinet from '@module/learner-management/board/trophyCabinet';

const IndividualBoard = () => {
  return (
    <>
      <Box pb="37px">
        <IndividualHeader />
      </Box>
      <Box pb="43px">
        <LeaderBoard />
      </Box>
      <Box>
        <TrophyCabinet />
      </Box>
    </>
  );
};

export default IndividualBoard;
