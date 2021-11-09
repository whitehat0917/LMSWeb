import React from 'react';
import CoursePage from '@module/learner-management/course/detail';
import { Container } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';

export default function Course() {
  return (
    <Container className="mainContainer">
      <CoursePage />
    </Container>
  );
}
