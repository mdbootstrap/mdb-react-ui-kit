import React from 'react';
import clsx from 'clsx';
import type { InputGroupTextProps } from './types';

const MDBInputGroupText: React.FC<InputGroupTextProps> = React.forwardRef<HTMLAllCollection, InputGroupTextProps>(
  ({ className, children, noBorder, tag: Tag, ...props }, ref) => {
    const classes = clsx('input-group-text', noBorder && 'border-0', className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBInputGroupText.defaultProps = { tag: 'span', noBorder: false };

export default MDBInputGroupText;
