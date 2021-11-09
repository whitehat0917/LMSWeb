import React from 'react';
import { Box, Link } from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';

const EventCalendarCard = ({ data }) => {
  const handleClickOpen = () => {

  };

  const handleShare = () => {

  };
  return (
    <Box p="16px 20px 25px 20px" bgcolor="white" borderRadius="5px" boxShadow={`0px 3px 6px ${lmsStyle['box-shadow-tiny']}`} mb="9px">
      <Box display="flex" color={lmsStyle['base-primary']}>
        <Box fontSize="12px" fontWeight="400" color={lmsStyle['base-secondary']} mr="10px">{data.title}</Box>
        <Box
          fontSize="10px"
          fontWeight="600"
          color={lmsStyle['--base-primary']}
          lineHeight="17px"
        >
          <Link component="button" onClick={() => handleClickOpen()} className="linkBtn">View</Link>{' '}|{' '}
          <Link component="button" onClick={() => handleShare()} className="linkBtn">Share</Link>
        </Box>
      </Box>
      <Box mt="5px" fontSize="10px" fontWeight="400" color={lmsStyle['base-gray-500']}>{data.description}</Box>
    </Box>
  );
};

export default EventCalendarCard;