import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SegmentHeader from '@element/segementHeader';
import ProgressTab from '@module/learner-management/home/progressTab';

const useStyle = makeStyles(() => ({
  container: {
    marginTop: '-10px',
    padding: '40px 30px 20px 30px',
    color: 'white',
  },
}));
const YourProgress = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/student/learning');
  };
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <SegmentHeader
        data={{
          title: 'Your Progress',
          btnTitle: 'Visit My Learning',
          type: 0,
        }}
        onClick={handleClick}
      />
      <ProgressTab />
    </Container>
  );
};

export default YourProgress;
