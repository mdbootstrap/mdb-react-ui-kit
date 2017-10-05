import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Mask extends React.Component {

  render() {
    const {
      className,
      children,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'mask',
      className
    );
    return (
      <tag {...attributes} className={classes} >{this.props.children}</tag>

    );
  }
}

Mask.defaultProps = {
  tag: 'div'
};

Mask.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Mask;
