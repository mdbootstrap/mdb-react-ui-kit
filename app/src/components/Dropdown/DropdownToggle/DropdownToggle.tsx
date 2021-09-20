import clsx from 'clsx';
import React, { useContext } from 'react';
import type { DropdownToggleProps } from './types';
import MDBBtn from '../../Button/Button';
import { DropdownContext } from '../context';

const MDBDropdownToggle: React.FC<DropdownToggleProps> = ({
  className,
  tag: Tag,
  children,
  onClick,
  split,
  ...props
}): JSX.Element => {
  const classes = clsx('dropdown-toggle', split && 'dropdown-toggle-split', className);
  const { handleOpenClose, setReferenceElement, isOpenState } = useContext(DropdownContext);

  const handleToggleClick = (e: React.MouseEvent) => {
    handleOpenClose();

    onClick && onClick(e);
  };

  return (
    <Tag
      onClick={handleToggleClick}
      ref={setReferenceElement}
      className={classes}
      {...props}
      aria-expanded={isOpenState ? true : false}
    >
      {children}
    </Tag>
  );
};

MDBDropdownToggle.defaultProps = {
  tag: MDBBtn,
};

export default MDBDropdownToggle;
