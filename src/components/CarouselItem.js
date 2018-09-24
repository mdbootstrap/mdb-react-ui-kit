import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackwards = this.moveBackwards.bind(this);
    this.makeVisible = this.makeVisible.bind(this);
  }

  moveForward() {
    this.style = {
      position: 'absolute',
      left: '100%'
    };
  }

  moveBackwards() {
    this.style = {
      position: 'absolute',
      left: '-100%'
    };
  }

  makeVisible() {
    this.style = {
      left: '0'
    };
  }

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
      this.context.slide ? 'active carousel-slide-item' : itemId === this.context.activeItem ? 'active' : false,
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
    }

    return (
      <Tag {...attributes} className={classes} style={this.style}>
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
