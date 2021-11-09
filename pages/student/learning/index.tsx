import React from 'react';
import { Container } from '@material-ui/core';
import MyLearning from '@module/learner-management/learning';

export default function LearningPage() {
  return (
    <Container className="mainContainer">
      <MyLearning />
    </Container>
  );
}
