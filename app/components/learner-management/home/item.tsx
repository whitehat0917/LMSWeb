import React from 'react';
import { ButtonStyle, ItemStyle } from '../common/learner.style';

export function Item({ process, valueButton }) {
  return (
    <ItemStyle>
      <span>{process}</span>
      <span>
        <ButtonStyle>{valueButton}</ButtonStyle>
      </span>
    </ItemStyle>
  );
}

export default Item;
