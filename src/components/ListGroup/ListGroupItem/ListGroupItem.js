import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListGroupItem = props => {
  let {
    active,
    children,
    className,
    color,
    disabled,
    hover,
    success,
    info,
    warning,
    danger,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames('list-group-item', className, {
    active,
    disabled,
    [`list-group-item-${color}`]: ' color',
    'list-group-item-action': hover
  });

  if (attributes.href && Tag === 'li') {
    Tag = 'a';
  }

  return (
    <Tag data-test='list-group-item' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  warning: PropTypes.bool
};

ListGroupItem.defaultProps = {
  tag: 'li'
};

export default ListGroupItem;
export { ListGroupItem as MDBListGroupItem };
