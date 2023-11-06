'use client';

import clsx from 'clsx';
import React from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { DropdownProps } from '../types';

export const DropdownBody = ({
  className,
  tag: Tag = 'div',
  group,
  children,
  dropup,
  dropright,
  dropleft,
  ...props
}: DropdownProps) => {
  useClickOutside();

  const classes = clsx(
    group ? 'btn-group' : 'dropdown',
    dropup && 'dropup',
    dropright && 'dropend',
    dropleft && 'dropstart',
    className
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};
