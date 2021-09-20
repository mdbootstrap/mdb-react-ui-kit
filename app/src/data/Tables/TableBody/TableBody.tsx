import React from 'react';
import clsx from 'clsx';
import type { TableBodyProps } from './types';

const MDBTableBody: React.FC<TableBodyProps> = React.forwardRef<HTMLAllCollection, TableBodyProps>(
  ({ className, tag: Tag, children, ...props }, ref) => {
    const classes = clsx(className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBTableBody.defaultProps = {
  tag: 'tbody',
};

export default MDBTableBody;
