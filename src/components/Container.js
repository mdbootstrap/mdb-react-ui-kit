import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Container extends Component {

  render() {
 
    const {
      fluid,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      fluid ? 'container-fluid' : 'container',
      className
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Container.defaultProps = {
  tag: 'div',
  fluid: false
};

export default Container;