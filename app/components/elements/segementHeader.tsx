import React from 'react';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { lmsStyle } from '../../styles/ui.variables';

const useStyle = makeStyles(() => ({
  blueBtn: {
    fontSize: '13px',
    backgroundColor: lmsStyle['base-primary'],
  },
  biscayBtn: {
    fontSize: '13px',
    backgroundColor: lmsStyle['base-secondary'],
  },
}));

const SegmentHeader = ({ data, onClick }) => {
  const classes = useStyle();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box fontSize="14px" fontWeight="600" color="#16395B">
        {data.title}
      </Box>
      {data.btnTitle ? (
        <Button
          variant="contained"
          color="primary"
          className={data.type === 0 ? classes.biscayBtn : classes.blueBtn}
          onClick={onClick}
        >
          {data.btnTitle}
        </Button>
      ) : (
        ''
      )}
    </Box>
  );
};

export default SegmentHeader;
