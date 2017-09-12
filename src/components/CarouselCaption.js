import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CarouselCaption extends Component {

  render() {
 
    let {
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'carousel-caption',
      className
    )

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

CarouselCaption.propTypes = {
  active: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

CarouselCaption.defaultProps = {
  tag: 'div'
};

export default CarouselCaption;