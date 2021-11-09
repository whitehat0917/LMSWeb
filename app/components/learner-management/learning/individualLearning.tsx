import React from 'react';
import { Box, Button, Grid, Link, makeStyles } from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';
import { useRouter } from 'next/router';

const useStyle = makeStyles(() => ({
  captionImg: {
    width: '100%',
    height: '100%',
    marginRight: '23px',
  },
}));

const IndividualLearning = ({ data }) => {
  const classes = useStyle();
  const router = useRouter();

  const handleCourse = () => {
    router.push('/student/learning/course');
  };

  return (
    <Box
      width="100%"
      bgcolor="white"
      boxShadow={`0px 3px 3px ${lmsStyle['box-shadow-tiny']}`}
      mb="17px"
      border={`1px solid ${lmsStyle['base-gray-300']}`}
      borderRadius="3px"
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container>
            <Grid item xs={12} sm={12} md={3}>
              <img
                src={data.image}
                alt="captionImg"
                className={classes.captionImg}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Box
                height="100%"
                p={{ sm: '15px', xs: '15px', md: '20px', lg: '20px' }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Box fontSize="14px" fontWeight="600" mb="7px">
                  {data.title}
                </Box>
                <Box
                  fontSize="10px"
                  fontWeight="400"
                  color={lmsStyle['base-gray-500']}
                >
                  {data.description}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box
            display="flex"
            justifyContent={{
              xs: 'flex-start',
              sm: 'flex-start',
              md: 'flex-end',
            }}
            alignItems="center"
            height="100%"
            mr="25px"
            pl={{ sm: '15px', xs: '15px', md: '20px', lg: '20px' }}
            pb={{ sm: '15px', xs: '15px', md: '0px', lg: '0px' }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Box
                fontSize="10px"
                fontWeight="500"
                color={lmsStyle['base-gray-500']}
                mb="10px"
              >
                {data.result}
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCourse}
              >
                Continue Course
              </Button>
              <Box
                mt="7px"
                fontSize="10px"
                fontWeight="600"
                color={lmsStyle['base-primary']}
                lineHeight="17px"
              >
                <Link component="button" className="linkBtn">
                  Share
                </Link>
                <img src="/images/share.svg" alt="share" className="linkImg" />{' '}
                |{' '}
                <Link component="button" className="linkBtn">
                  More
                </Link>
                <img src="/images/polygon.svg" alt="more" className="linkImg" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndividualLearning;
