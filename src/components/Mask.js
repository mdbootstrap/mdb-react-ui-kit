import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Mask extends React.Component {
  render() {
    const {
      className,
      children,
      pattern,
      overlay,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'mask',
      pattern && `pattern-${pattern}`,
      overlay && `rgba-${overlay}`,
      className
    );
    return (
      <Tag {...attributes} className={classes}>{this.props.children}</Tag>
    );
  }
}

Mask.defaultProps = {
  tag: 'div'
};

Mask.propTypes = {
  tag: PropTypes.string,
  pattern: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string
};

export default Mask;
