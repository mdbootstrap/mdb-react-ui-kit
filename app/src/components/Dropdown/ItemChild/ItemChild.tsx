import clsx from 'clsx';
import React from 'react';
import { ItemChildProps } from './types';

export const ItemChild = ({
  childTag: ChildTag,
  children,
  disabled,
  link,
  divider,
  header,
  href = '#',
}: ItemChildProps) => {
  const linkClasses = clsx('dropdown-item', disabled && 'disabled');

  if (link) {
    if (ChildTag) {
      return <ChildTag className={linkClasses}>{children}</ChildTag>;
    }
    return (
      <a href={href} className={linkClasses}>
        {children}
      </a>
    );
  }

  if (divider) {
    if (ChildTag) {
      return <ChildTag className='dropdown-divider'>{children}</ChildTag>;
    }
    return <hr className='dropdown-divider' />;
  }

  if (header) {
    if (ChildTag) {
      return <ChildTag className='dropdown-header'>{children}</ChildTag>;
    }
    return <h6 className='dropdown-header'>{children}</h6>;
  }

  return null;
};
