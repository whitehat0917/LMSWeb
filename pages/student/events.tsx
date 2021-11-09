import React from 'react';
import { Container } from '@material-ui/core';
import Events from '@module/learner-management/events';

export default function EventsPage() {
  return (
    <Container className="mainContainer">
      <Events />
    </Container>
  );
}
