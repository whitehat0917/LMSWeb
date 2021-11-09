import React from 'react';
import { Box } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { lmsStyle } from '../../../../styles/ui.variables';

const ArrowUpButton = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" borderRadius="50%" bgcolor={lmsStyle['base-secondary']}>
      <KeyboardArrowUpIcon style={{ color: 'white' }} />
    </Box>
  );
};

export default ArrowUpButton;