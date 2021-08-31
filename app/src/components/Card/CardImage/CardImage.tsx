import React from 'react';
import clsx from 'clsx';
import type { CardImageProps } from './types';

const MDBCardImage: React.FC<CardImageProps> = ({ className, children, overlay, position, fluid, ...props }) => {
  const classes = clsx(position && `card-img-${position}`, fluid && 'img-fluid', overlay && 'card-img', className);

  return (
    <img className={classes} {...props}>
      {children}
    </img>
  );
};

export default MDBCardImage;
