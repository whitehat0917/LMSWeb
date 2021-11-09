import React from 'react';
import Item from './item';
import Description from './description';
import ImageFilter from '../common/imageFilter';
import { ItemsStyle, ItemshiddedStyle } from '../common/learner.style';

const Items = (props) => {
  return (
    <>
      <ItemsStyle>
        <ItemshiddedStyle>{ImageFilter(props.BTrade)}</ItemshiddedStyle>
        <ItemshiddedStyle>
          <Description {...props} />
        </ItemshiddedStyle>
        <ItemshiddedStyle>
          <Item {...props} />
        </ItemshiddedStyle>
      </ItemsStyle>
    </>
  );
};

export default Items;
