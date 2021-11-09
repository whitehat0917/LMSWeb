import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(() => ({
  takeBtn: {
    backgroundColor: '#16395B',
  },
}));

const GuideItem = (props) => {
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={12} md={8}>
      <Box
        boxShadow="0px 3px 6px #00000005"
        bgcolor="white"
        borderRadius="5px"
        p="30px"
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <Box display="flex" alignItems="center" pl="20px">
              <img src={props.icon} alt="icon" />
              <Box fontSize="13px" ml="30px">
                <Box fontWeight="600">{props.title}</Box>
                <Box fontWeight="400" mt="6px">
                  {props.content}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              display="flex"
              justifyContent={{
                xs: 'center',
                sm: 'center',
                md: 'center',
                lg: 'flex-end',
                xl: 'flex-end',
              }}
              pt={{ xs: '20px', xl: '0px' }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.takeBtn}
              >
                Take a tour
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default GuideItem;
