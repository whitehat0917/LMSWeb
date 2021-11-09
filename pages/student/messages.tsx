import React from 'react';
import { Container } from '@material-ui/core';
import ChatPage from '@module/learner-management/messages/chat';

export default function EventsPage() {
  return (
    <Container className="mainContainer">
      <ChatPage />
    </Container>
  );
}
