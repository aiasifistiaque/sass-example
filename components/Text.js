/** @format */

import React from 'react';
import colors from '../constants/colors';

export default function Text(props) {
  const styles = (size, color) => {
    let fontsize = 15;
    let fontcolor = 'black';

    if (size == 'big') fontsize = 30;
    else if (size == 'medium') fontsize = 20;
    else if (size == 'small') fontsize = 10;
    else if (size == 'regular') fontsize = 15;

    if (color == 'regular') fontcolor = 'black';
    else if (color == 'primary') fontcolor = colors.primary;
    else if (color == 'danger') fontcolor = colors.danger;
    else if (color == 'success') fontcolor = colors.success;

    return {
      fontSize: fontsize,
      color: fontcolor,
    };
  };

  return (
    <div>
      <p style={styles(props.size || 'regular', props.color || 'regular')}>
        {props.children}
      </p>
    </div>
  );
}
