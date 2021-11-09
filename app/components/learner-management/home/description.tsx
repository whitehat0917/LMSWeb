import React from 'react';

export function Description({ title, content }) {
  return (
    <>
      <th>
        <span>{title}</span>
      </th>
      <span>{content}</span>
    </>
  );
}

export default Description;
