import React from 'react';
import clsx from 'clsx';
import type { TableBodyProps } from './types';

const MDBTableBody: React.FC<TableBodyProps> = ({ className, children, ...props }) => {
  const classes = clsx(className);

  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  );
};

export default MDBTableBody;
