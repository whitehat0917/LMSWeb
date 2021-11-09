import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  icon: {
    width: '12px',
    marginRight: '8px',
  },
  splitText: {
    fontSize: '17px',
  },
}));

export const IndividualStatus = ({ title, icon, value }) => {
  const [splitText, setSplitText] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setSplitText(value.split(/(\d+)/).filter(Boolean));
  }, []);

  return (
    <Grid item>
      <Box ml={1} mr={1}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={icon} alt="status-icon" className={classes.icon} />
          <Box fontSize="13px">
            {title}
          </Box>
        </Box>
        <Box fontSize="40px" fontWeight="600" lineHeight="49px">{splitText[0]}
          <span className={classes.splitText}>{splitText[1]}</span>
        </Box>
      </Box>
    </Grid>
  );
};