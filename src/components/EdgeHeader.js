import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class EdgeHeader extends Component {

  render() {
 
    const {
      color,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'edge-header',
      color,
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

EdgeHeader.propTypes = {
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

EdgeHeader.defaultProps = {
  color: 'deep-purple',
  tag: 'div'
};

export default EdgeHeader;