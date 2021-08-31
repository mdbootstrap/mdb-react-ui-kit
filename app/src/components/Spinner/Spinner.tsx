import React from 'react';
import clsx from 'clsx';
import type { SpinnerProps } from './types';

const MDBSpinner: React.FC<SpinnerProps> = React.forwardRef<HTMLAllCollection, SpinnerProps>(
  ({ className, children, tag: Tag, color, grow, size, ...props }, ref) => {
    const classes = clsx(
      `${grow ? 'spinner-grow' : 'spinner-border'}`,
      color && `text-${color}`,
      `${size ? (grow ? 'spinner-grow-' + size : 'spinner-border-' + size) : ''}`,
      className
    );

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBSpinner.defaultProps = { tag: 'div' };

export default MDBSpinner;
