/** @format */

import React from 'react';

export default function Container(props) {
  return (
    <div
      className={props.size == 'full' ? 'container-fullscreen' : 'container'}
      style={{
        backgroundColor: props.color || 'white',
        flexDirection: props.orientation || 'column',
      }}>
      {props.children}
    </div>
  );
}
