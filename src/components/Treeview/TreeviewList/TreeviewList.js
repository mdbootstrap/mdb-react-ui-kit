import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBBtn } from '../../Button';
import { MDBIcon } from '../../Fa';
import { MDBCollapse } from '../../Collapse';
import { TreeviewContext } from '../Treeview';

const TreeviewList = props => {
  const [opened, setOpen] = useState(false);

  useEffect(() => {
    setOpen(props.opened);
  }, [props.opened]);

  const handleSwitch = () => setOpen(!opened);

  const {
    children,
    className,
    disabled,
    disabledClassName,
    fab,
    fal,
    far,
    icon,
    opened: _,
    tag: Tag,
    title,
    ...attributes
  } = props;

  const { theme } = useContext(TreeviewContext);

  const nestedClasses = classNames('nested', opened && 'active');
  const folder = classNames(
    theme && `closed treeview-${theme}-element d-block`,
    !children && 'ml-2',
    opened && 'opened',
    disabled && disabledClassName
  );
  const classes = classNames(
    theme && `treeview-${theme}-items px-0`,
    className
  );
  const iconClasses = classNames(theme ? 'mx-2' : 'mr-2');

  const child = children && (
    <ul
      className={nestedClasses}
      style={{ height: 'calc(100% + 0.6rem)', marginLeft: '2px' }}
    >
      {children}
    </ul>
  );
  const collapse = theme && <MDBCollapse isOpen={opened}>{child}</MDBCollapse>;
  const iconArrow =
    theme !== 'colorful'
      ? 'angle-right'
      : opened
      ? 'minus-circle'
      : 'plus-circle';

  const arrow = children && (
    <MDBIcon
      icon={iconArrow}
      rotate={theme !== 'colorful' ? (opened ? '90 down' : '0') : ''}
      className='rotate'
    />
  );

  const btn = children && (
    <MDBBtn
      flat
      className='m-0 py-0 px-1 mr-1 z-depth-0'
      onClick={handleSwitch}
    >
      {arrow}
    </MDBBtn>
  );

  return (
    <Tag {...attributes} className={classes}>
      <span
        className={folder}
        onClick={!disabled && theme ? handleSwitch : null}
      >
        {theme ? arrow : btn}
        <span>
          <MDBIcon
            className={iconClasses}
            fab={fab}
            fal={fal}
            far={far}
            icon={icon}
          />
          {title}
        </span>
      </span>
      {collapse || child}
    </Tag>
  );
};

TreeviewList.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  opened: PropTypes.bool,
  tag: PropTypes.string
};

TreeviewList.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};

TreeviewList.contextTypes = {
  theme: PropTypes.string
};

export default TreeviewList;
export { TreeviewList as MDBTreeviewList };
