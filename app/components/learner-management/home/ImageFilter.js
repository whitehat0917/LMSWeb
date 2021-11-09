import React from 'react';
import money from '../images/money.svg';
import { IconeTema } from '../UI';

export default (type) => {
  const Images = {
    money: <IconeTema src={money} alt="money" />,
    default: <IconeTema src={money} alt="money" />,
  };

  return Images[type] || Images.default;
};
