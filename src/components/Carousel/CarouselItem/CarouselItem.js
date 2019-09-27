import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CarouselItem extends Component {
  moveForward = () => {
    this.style = {
      position: 'absolute',
      left: '100%'
    };
  };

  moveBackwards = () => {
    this.style = {
      position: 'absolute',
      left: '-100%'
    };
  };

  makeVisible = () => {
    this.style = {
      left: '0'
    };
  };

  render() {
    let {
      active,
      children,
      className,
      itemId,
      tag: Tag,
      ...attributes
    } = this.props;

    itemId = parseInt(itemId, 10);

    let classes = classNames(
      'carousel-item',
      {
        'active carousel-slide-item': this.context.slide,
        active: !this.context.slide && itemId === this.context.activeItem
      },
      className
    );

    let slideIndex = this.context.activeItem - itemId;

    if (this.context.slide) {
      if (slideIndex < 0) {
        this.moveForward();
      } else if (slideIndex > 0) {
        this.moveBackwards();
      } else {
        this.makeVisible();
      }
    } else {
      this.makeVisible();
    }

    return (
      <Tag
        data-test='carousel-item'
        {...attributes}
        className={classes}
        style={this.style}
      >
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
export { CarouselItem as MDBCarouselItem };
