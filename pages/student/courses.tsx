import React from 'react';
import { Container } from '@material-ui/core';
import CourseLibrary from '@module/learner-management/course/courses';

const Courses = () => {
  return (
    <Container className="mainContainer">
      <CourseLibrary />
    </Container>
  );
};

export default Courses;
