import React from 'react';
import { Box } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { lmsStyle } from '../../../../styles/ui.variables';

const ArrowRightButton = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" borderRadius="50%" bgcolor={lmsStyle['base-secondary']}>
      <KeyboardArrowRightIcon style={{ color: 'white' }} />
    </Box>
  );
};

export default ArrowRightButton;