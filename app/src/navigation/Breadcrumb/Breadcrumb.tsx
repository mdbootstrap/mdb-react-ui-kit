import React from 'react';
import clsx from 'clsx';
import { BreadcrumbProps } from './types';

const MDBBreadcrumb: React.FC<BreadcrumbProps> = React.forwardRef<HTMLOListElement, BreadcrumbProps>(
  ({ className, color, uppercase, bold, children, ...props }, ref) => {
    const classes = clsx(
      'breadcrumb',
      bold && 'font-weight-bold',
      color && `text-${color}`,
      uppercase && 'text-uppercase',
      className
    );

    return (
      <nav aria-label='breadcrumb'>
        <ol className={classes} ref={ref} {...props}>
          {children}
        </ol>
      </nav>
    );
  }
);

export default MDBBreadcrumb;
