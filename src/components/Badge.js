import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Badge extends React.Component {

  render() {
    const {
      tag: Tag,
      className,
      children,
      color,
      pill,
      ...attributes
    } = this.props;

    const classes = classNames(
      'badge',
      color,
      'badge-' + color,
      pill ? 'badge-pill' : false,
      className
    );
    return (
      <Tag {...attributes} className={classes} >{this.props.children}</Tag>

    );
  }
}

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
