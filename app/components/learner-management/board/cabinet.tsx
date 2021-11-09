import React from 'react';
import { Box } from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';

const Cabinet = ({ info }) => {
  return (
    <Box
      boxShadow={`0px 3px 6px ${lmsStyle['box-shadow-tiny']}`}
      borderRadius="5px"
      p="16px 14px"
      bgcolor={lmsStyle['base-gray-100']}
      width="140px"
      height="200px"
      textAlign="center"
      mr="18px"
    >
      <img src={info.src} alt="medal" />
      <Box
        fontSize="12px"
        fontWeight="600"
        color={lmsStyle['base-secondary']}
        pt="10px"
        pb="5px"
      >
        {info.title}
      </Box>
      <Box fontSize="10px" fontWeight="400" color={lmsStyle['base-gray-500']}>
        {info.description}
      </Box>
    </Box>
  );
};

export default Cabinet;
