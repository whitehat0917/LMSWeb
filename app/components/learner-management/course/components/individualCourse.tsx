import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Grid, IconButton, Link, makeStyles } from '@material-ui/core';
import { lmsStyle } from '../../../../styles/ui.variables';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyle = makeStyles(() => ({
  captionImg: {
    width: '100%',
    height: '100%',
    marginRight: '23px',
  },
  bookBtn: {
    padding: 0,
  },
}));

const IndividualCourse = ({ data }) => {
  const router = useRouter();
  const classes = useStyle();
  const [booked, setBooked] = useState(false);
  const handleBookmark = () => {
    setBooked(!booked);
  };
  const handleCourseDetail = () => {
    router.push('/student/course');
  };
  return (
    <Box
      width="100%"
      bgcolor="white"
      boxShadow={`0px 3px 3px ${lmsStyle['box-shadow-tiny']}`}
      mb="17px"
      border={`1px solid ${lmsStyle['base-gray-300']}`}
      borderRadius="3px"
      style={{ cursor: 'pointer' }}
      onClick={handleCourseDetail}
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
                  mb="10px"
                >
                  {data.cat} | By {data.teacher}
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
              justifyContent="space-around"
              alignItems="flex-end"
              height="100%"
            >
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={handleBookmark}
                className={classes.bookBtn}
              >
                {booked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
              </IconButton>
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

export default IndividualCourse;
