import clsx from 'clsx';
import React from 'react';
import type { ScrollspySectionProps } from './types';

const MDBScrollspySection: React.FC<ScrollspySectionProps> = React.forwardRef<HTMLAllCollection, ScrollspySectionProps>(
  ({ className, customSelect, tag: Tag, children, ...props }, ref) => {
    const classes = clsx(`scrollspy-section${customSelect}`, className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBScrollspySection.defaultProps = { tag: 'section', customSelect: '' };

export default MDBScrollspySection;
