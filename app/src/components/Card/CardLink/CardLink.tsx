import React from 'react';
import clsx from 'clsx';
import type { CardLinkProps } from './types';

const MDBCardLink: React.FC<CardLinkProps> = ({ className, children, ...props }) => {
  const classes = clsx('card-link', className);

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
};

export default MDBCardLink;
