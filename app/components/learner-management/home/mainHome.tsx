import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { Box, Button, Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TotalStats from './totalStats';
import CourseChart from './courseChart';
import { authnState } from '../../../store';
import { BattleboardInfo, carouselData, UpcomingInfo } from '../../../data/mock';
import ReportCourses from '@module/learner-management/reports/ReportCourses';
import YourProgress from './yourProgress';
import SegmentHeader from '@element/segementHeader';
import Stat from '@module/learner-management/home/component/stat';
import LoadingView from '@element/loading/loading-view';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#16395B',
    },
    container: {
      marginTop: '-10px',
      padding: '40px 30px 20px 30px',
      color: 'white',
    },
    introImg: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 400,
      },
    },
    headerBtn: {
      textTransform: 'none',
      marginRight: '20px',
    },
    board: {
      color: '#16395B',
      marginTop: '21px',
    },
    battle: {
      marginTop: '-10px',
      padding: '40px 30px 20px 30px',
      color: 'white',
      marginBottom: '20px',
    },
  }),
);

const MainHome = () => {
  const router = useRouter();
  const authnInfo = useRecoilValue(authnState);
  console.log(authnInfo)
  const [isLoading, setIsLoading] = React.useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const classes = useStyles();

  const handleResume = () => {
  };

  const handleCollapse = () => {
    setCollapsed(true);
  };

  const handleUpcomingClick = () => {
    router.push('/student/events');
  };

  const handleView = () => {
  };

  const handleBoardClick = () => {
    router.push('/student/board');
  };

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  return (
    <div className={classes.root}>
      {!collapsed ? (
        <Box bgcolor="#16395B" mt="40px">
          <Container className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box fontSize="22px" fontWeight="600">
                      Welcome to Learn or Teach, {authnInfo.userInfo ? authnInfo.userInfo.firstName : ''}
                    </Box>
                    <Box fontSize="10px" fontWeight="600" mt="30px">
                      Quote of the day{' '}
                    </Box>
                    <Box
                      fontSize="15px"
                      fontWeight="400"
                      mt={'20px'}
                      mb={'10px'}
                    >
                      Wisdom is not a product of schooling but of the lifelong
                      attempt to acquire it.
                    </Box>
                    <Box fontSize="10px" fontWeight="200">
                      Albert einstein
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      height="100%"
                      display="flex"
                      justifyContent="flex-end"
                      flexDirection="column"
                    >
                      <Box
                        display={{ lg: 'flex', xl: 'flex', md: 'block' }}
                        justifyContent="space-between"
                        alignItems="center"
                        mt="20px"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleResume}
                          size="small"
                          className={classes.headerBtn}
                        >
                          Resume Last Course
                        </Button>
                        <Button
                          variant="text"
                          color="inherit"
                          onClick={handleCollapse}
                          size="small"
                          className={classes.headerBtn}
                        >
                          Collapse this panel
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  display={'flex'}
                  justifyContent={{ md: 'flex-end', sm: 'center' }}
                  pt={{ xs: '20px', sm: '0px', md: '0px', lg: '0', xl: '0' }}
                >
                  <img
                    src="/images/introduction.svg"
                    alt="introduction"
                    className={classes.introImg}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        ''
      )}
      <TotalStats />
      <CourseChart />
      <Container className={classes.container}>
        <ReportCourses
          title="Courses In Progress"
          btnTitle="Visit Course Reports"
          data={carouselData}
        />
      </Container>
      <YourProgress />
      <Container className={classes.battle}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SegmentHeader
              data={{
                title: 'Battleboard',
                btnTitle: 'Visit Battleboard',
                type: 0,
              }}
              onClick={handleBoardClick}
            />
            <Grid container className={classes.board} spacing={2}>
              {BattleboardInfo.map((item, key) => (
                <Grid item key={key} xs={12} sm={6}>
                  <Stat info={item} link={false} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <SegmentHeader
              data={{ title: 'Upcoming', btnTitle: 'View All Events', type: 0 }}
              onClick={handleUpcomingClick}
            />
            <Box mt="29px" color="#16395B" mb="10px">
              {UpcomingInfo.map((item, key) => (
                <Box
                  key={key}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  boxShadow="0px 3px 6px #00000005"
                  mb="8px"
                  bgcolor="white"
                  borderRadius='4px'
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      pt="7px"
                      pb="7px"
                      pl="10px"
                    >
                      <img src="/images/np_calendar.svg" alt="calendar" />
                      <Box fontSize="13px" fontWeight="600" ml="9px">
                        {item.date}
                      </Box>
                    </Box>
                    <Box
                      component="span"
                      fontSize="13px"
                      fontWeight="400"
                      ml="18px"
                    >
                      {item.title}
                    </Box>
                  </Box>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={handleView}
                    size="small"
                  >
                    VIEW
                  </Button>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainHome;
