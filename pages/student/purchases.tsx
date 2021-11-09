import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import PurchaseManagement from '@module/purchases';
import { Container } from '@material-ui/core';

export default function Purchases() {
  return (
    <Container className="mainContainer">
      <PurchaseManagement />
    </Container>
  );
}
