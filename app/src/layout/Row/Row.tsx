import clsx from 'clsx';
import React from 'react';
import { RowProps } from './types';

const MDBRow: React.FC<RowProps> = React.forwardRef<HTMLAllCollection, RowProps>(
  (
    { around, between, bottom, center, children, className, evenly, end, middle, start, tag: Tag, top, ...props },
    ref
  ) => {
    const classes = clsx(
      'row',
      around && 'justify-content-around',
      between && 'justify-content-between',
      bottom && 'align-self-end',
      center && 'justify-content-center',
      evenly && 'justifty-content-evenly',
      end && 'justify-content-end',
      middle && 'align-self-center',
      start && 'justify-content-start',
      top && 'align-self-start',
      className
    );

    return (
      <Tag className={classes} {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBRow.defaultProps = { tag: 'div' };

export default MDBRow;
