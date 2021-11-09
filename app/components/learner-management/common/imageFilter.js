import React from 'react';

import { ImageStyle } from './learner.style';

export function Image(type) {
  const Images = {
    BTrade: (
      <ImageStyle src={'/assets/images/learner/btrade.jpg'} alt="btrade" />
    ),
    Food: <ImageStyle src={'/assets/images/learner/food.jpg'} alt="Food" />,
    Eye: <ImageStyle src={'/assets/images/learner/Eye.jpg'} alt="Eye" />,
    default: (
      <ImageStyle src={'/assets/images/learner/btrade.jpg'} alt="Trace image" />
    ),
  };

  return Images[type] || Images.default;
}

export default Image;
