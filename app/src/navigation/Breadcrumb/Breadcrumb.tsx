import React from 'react';
import clsx from 'clsx';
import { BreadcrumbProps } from './types';

const MDBBreadcrumb: React.FC<BreadcrumbProps> = React.forwardRef<HTMLAllCollection, BreadcrumbProps>(
  ({ className, color, uppercase, bold, children, tag: Tag, ...props }, ref) => {
    const classes = clsx(
      'breadcrumb',
      bold && 'font-weight-bold',
      color && `text-${color}`,
      uppercase && 'text-uppercase',
      className
    );

    return (
      <nav aria-label='breadcrumb'>
        <Tag className={classes} ref={ref} {...props}>
          {children}
        </Tag>
      </nav>
    );
  }
);

MDBBreadcrumb.defaultProps = {
  tag: 'ol',
};

export default MDBBreadcrumb;
