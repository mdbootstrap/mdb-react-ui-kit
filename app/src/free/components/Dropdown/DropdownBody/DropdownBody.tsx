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
  wrapper,
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

  return wrapper ? (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  ) : (
    <>{children}</>
  );
};
