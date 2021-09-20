import React from 'react';
import clsx from 'clsx';
import type { InputGroupProps } from './types';

const MDBInputGroup: React.FC<InputGroupProps> = React.forwardRef<HTMLAllCollection, InputGroupProps>(
  ({ className, children, noWrap, tag: Tag, size, ...props }, ref) => {
    const classes = clsx('input-group', noWrap && 'flex-nowrap', size && `input-group-${size}`, className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBInputGroup.defaultProps = { tag: 'div', noWrap: false };

export default MDBInputGroup;
