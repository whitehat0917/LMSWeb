import React from 'react';
import { Box } from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';
import TimeRemaining from '@module/learner-management/board/timeRemaining';

const BoardAds = ({ info }) => {
  return (
    <Box
      boxShadow="0px 3px 6px #00000005"
      borderRadius="5px"
      pl="44px"
      bgcolor={lmsStyle['base-primary']}
      color="white"
      position="relative"
      height="134px"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
    >
      <Box fontSize="34px" fontWeight="600">
        {info.title}
      </Box>
      <Box fontSize="13px" fontWeight="400">
        {info.subTitle}
      </Box>
      <Box fontSize="25px" fontWeight="600">
        <TimeRemaining />
      </Box>
      {/*<Box position="absolute" right="30px" top="-30px">*/}
      {/*  <img src={info.product} alt="product-image" />*/}
      {/*</Box>*/}
    </Box>
  );
};

export default BoardAds;
