import React from 'react';
import clsx from 'clsx';
import type { TableHeadProps } from './types';

const MDBTableHead: React.FC<TableHeadProps> = ({ className, children, dark, light, ...props }) => {
  const classes = clsx(dark && 'table-dark', light && 'table-light', className);

  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  );
};

export default MDBTableHead;
