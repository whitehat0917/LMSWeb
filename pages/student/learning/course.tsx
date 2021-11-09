import React from 'react';
import { Container } from '@material-ui/core';
import Course from '@module/learner-management/learning/course';

export default function LearningPage() {
  return (
    <Container className="mainContainer">
      <Course />
    </Container>
  );
}
