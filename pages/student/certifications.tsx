import React from 'react';
import { Container } from '@material-ui/core';
import CertificationManagement from '@module/certifications';

export default function Certifications() {
  return (
    <Container className="mainContainer">
      <CertificationManagement />
    </Container>
  );
}
