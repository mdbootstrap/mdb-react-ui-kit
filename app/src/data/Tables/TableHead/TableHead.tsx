import React from 'react';
import clsx from 'clsx';
import type { TableHeadProps } from './types';

const MDBTableHead: React.FC<TableHeadProps> = React.forwardRef<HTMLAllCollection, TableHeadProps>(
  ({ className, tag: Tag, children, dark, light, ...props }, ref) => {
    const classes = clsx(dark && 'table-dark', light && 'table-light', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBTableHead.defaultProps = {
  tag: 'thead',
};

export default MDBTableHead;
