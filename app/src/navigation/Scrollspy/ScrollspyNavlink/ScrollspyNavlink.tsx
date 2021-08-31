import clsx from 'clsx';
import React from 'react';
import type { ScrollspyNavLinkProps } from './types';

const MDBScrollspyNavLink: React.FC<ScrollspyNavLinkProps> = React.forwardRef<HTMLAllCollection, ScrollspyNavLinkProps>(
  ({ className, scrollElement, active, tag: Tag, children, ...props }, ref) => {
    const classes = clsx('nav-link', className, active && 'active');

    const handleClick = (element: any) => {
      element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <Tag
        className={classes}
        ref={ref}
        {...props}
        onClick={() => handleClick(scrollElement)}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </Tag>
    );
  }
);

MDBScrollspyNavLink.defaultProps = { tag: 'a' };

export default MDBScrollspyNavLink;
