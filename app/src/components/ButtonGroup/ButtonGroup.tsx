import React, { useState } from 'react';
import clsx from 'clsx';
import type { ButtonGroupProps } from './types';

const MDBBtnGroup: React.FC<ButtonGroupProps> = React.forwardRef<HTMLAllCollection, ButtonGroupProps>(
  ({ className, children, shadow, toolbar, size, vertical, tag: Tag, ...props }, ref) => {
    let type;

    if (toolbar) {
      type = 'btn-toolbar';
    } else if (vertical) {
      type = 'btn-group-vertical';
    } else {
      type = 'btn-group';
    }
    const classes = clsx(type, shadow && `shadow-${shadow}`, size && `btn-group-${size}`, className);

    return (
      <Tag className={classes} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

MDBBtnGroup.defaultProps = { tag: 'div', role: 'group' };

export default MDBBtnGroup;
