import React, { useState, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MDBIcon } from '../../Fa';
import { TreeviewContext } from '../Treeview';

const TreeviewItem = props => {
  const [target, setTarget] = useState('');
  const targetRef = useRef(null);

  const {
    className,
    disabled,
    disabledClassName,
    fab,
    fal,
    far,
    icon,
    opened,
    tag: Tag,
    title,
    ...attributes
  } = props;
  const { theme, active, getActive } = useContext(TreeviewContext);

  useEffect(() => {
    if (targetRef && targetRef.current) {
      setTarget(targetRef.current);
      opened && getActive(targetRef.current);
    }
  }, []);

  const handleClick = () =>
    target.classList.contains('opened') ? getActive(null) : getActive(target);

  const classes = classNames(
    disabled && disabledClassName,
    theme && `treeview-${theme}-items treeview-${theme}-element closed mb-1`,
    active === target && !active.classList.contains('opened') ? 'opened' : '',
    className
  );
  return (
    <Tag
      {...attributes}
      className={classes}
      ref={targetRef}
      onMouseDown={!disabled ? handleClick : null}
      style={{ transform: 'translateY(0.3em)' }}
    >
      <MDBIcon className='mr-2' fab={fab} fal={fal} far={far} icon={icon} />
      <span>{title}</span>
    </Tag>
  );
};

TreeviewItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  opened: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

TreeviewItem.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};

export default TreeviewItem;
export { TreeviewItem as MDBTreeviewItem };
