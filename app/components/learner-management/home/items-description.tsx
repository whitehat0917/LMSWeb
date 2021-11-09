import React from 'react';
import styled from 'styled-components';
import ImageFilter from './ImageFilter';
import Description from './description';
import { Button } from '@material-ui/core';

const StyledItems = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export function Items(props) {
  return (
    <StyledItems>
      {ImageFilter(props.type)}
      <Description {...props} />
      <Button variant="contained">{props.value}</Button>
    </StyledItems>
  );
}

export default Items;
