import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Player } from 'video-react';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { authnState } from '../../../store';
import { learnerTrackerState } from 'store/learner.tracker';
import GuideItem from '@module/learner-management/home/guideItem';
import 'react-web-tabs/dist/react-web-tabs.css';
import { guidedTours, videos } from '../../../data/mock';
import { LearnerTrackerFactory } from '@lms-api/factory';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '40px 30px 0 30px',
      color: '#16395B',
    },
    introImg: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 400,
      },
    },
    video: {
      position: 'relative',
      '& .video-react': {
        borderRadius: '5px',
        '$ .video-react-poster': {
          borderRaidus: '5px',
        },
      },
    },
  }),
);

const Home = ({ skipClicked, setSkipped }) => {
  const authnInfo = useRecoilValue(authnState);
  const [learnerTrackerData, setLearnerTrackerData] = useRecoilState(
    learnerTrackerState
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const classes = useStyles();
  const handleSkip = () => {
    setSkipped(!skipClicked);
  };

  React.useEffect(() => {
    setIsLoading(true);
    getLearnerTrackerData();
  }, []);

  const getLearnerTrackerData = async () => {
    try {
      const response = await LearnerTrackerFactory.get('44','91');
      // setHomeData(response.data);
      console.log(response)
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box fontSize="22px" fontWeight="600">
            Welcome, {authnInfo.userInfo ? authnInfo.userInfo.firstName + ' ' + authnInfo.userInfo.lastName : ''}
          </Box>
          <Box
            fontSize="15px"
            fontWeight="400"
            mt={'16px'}
            mb={'20px'}
            pr={'30px'}
          >
            Below is an overview of what you can do as a learner. Once you’re done exploring, simply skip this introduction to get to your learner dashboard. You can always access this introduction content by in the help section
          </Box>
          <Button variant="contained" color="primary" onClick={handleSkip}>
            Skip Introduction
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            justifyContent={{ md: 'flex-end', sm: 'center' }}
            pt={{ sm: '0px', xs: '20px', md: '0px' }}
          >
            <img
              src="/images/introduction.svg"
              alt="introduction"
              className={classes.introImg}
            />
          </Box>
        </Grid>
      </Grid>
      <Box mt="40px">
        <Box fontSize="14px" fontWeight="600" mb="20px">
          Video Tutorials
        </Box>
        <Grid container spacing={2}>
          {videos.data.map(({ title, poster, src }, index) => {
            return (
              <Grid key={index} item md={3} sm={6} xs={12} className={classes.video}>
                <Box fontSize="13px" fontWeight="400" color="white" position="absolute" left="30px" bottom="15px" zIndex="99">{title}</Box>
                <Player poster={poster} style={{ borderRadius: '5px' }}>
                  <source src={src} style={{ borderRadius: '5px' }} />
                </Player>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box mt="45px" mb="30px">
        <Box fontSize="14px" fontWeight="600" mb="20px">
          Guided tours
        </Box>
        <Grid container spacing={3}>
          {guidedTours.map(({ title, content, icon }, index) => {
            return (
              <GuideItem
                key={index}
                title={title}
                content={content}
                icon={icon}
              />
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
