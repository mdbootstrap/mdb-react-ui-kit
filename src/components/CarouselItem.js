import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CarouselItem extends Component {
  render() {
    let {
      active,
      children,
      className,
      itemId,
      tag: Tag,
      ...attributes
    } = this.props;

    itemId = parseInt(itemId);

    let classes = classNames(
      'carousel-item',
      this.context.slide ? 'active carousel-slide-item' : itemId === this.context.activeItem ? 'active' : false,
      className
    );

    let slideIndex = this.context.activeItem - itemId; 
    let style = {};

    if (this.context.slide) {
      if (slideIndex < 0) {
        style = {
          position: 'absolute',
          left: '100%'
        }
      } else if (slideIndex > 0) {
        style = {
          position: 'absolute',
          left: '-100%'
        }
      } else {
        style = {
          left: '0'
        }
      }
    }

    return (
      <Tag {...attributes} className={classes} style={style}>
        {children}
      </Tag>
    );
  }
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  itemId: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

CarouselItem.defaultProps = {
  tag: 'div'
};

CarouselItem.contextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

export default CarouselItem;