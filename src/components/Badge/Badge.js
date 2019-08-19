import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = props => {
  const { tag: Tag, className, children, color, pill, ...attributes } = props;

  const classes = classNames(
    'badge',
    color,
    'badge-' + color,
    pill ? 'badge-pill' : false,
    className
  );
  return (
    <Tag data-test='badge' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Badge.defaultProps = {
  tag: 'span',
  color: 'default',
  pill: false
};

Badge.propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Badge;
export { Badge as MDBBadge };
