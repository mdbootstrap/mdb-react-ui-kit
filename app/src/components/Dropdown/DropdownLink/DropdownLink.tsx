import clsx from 'clsx';
import React, { useContext } from 'react';
import type { DropdownLinkProps } from './types';
import { DropdownContext } from '../context';

const MDBDropdownLink: React.FC<DropdownLinkProps> = ({
  onClick,
  className,
  tag: Tag,
  children,
  disableClass,
  ...props
}): JSX.Element => {
  const classes = clsx(!disableClass && 'dropdown-item', className);

  const { handleClose } = useContext(DropdownContext);

  const handleClickItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleClose();

    onClick && onClick(e);
  };

  return (
    <Tag className={classes} {...props} onClick={handleClickItem}>
      {children}
    </Tag>
  );
};

MDBDropdownLink.defaultProps = {
  tag: 'a',
};

export default MDBDropdownLink;
