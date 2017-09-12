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
      itemId === this.context.activeItem ? 'active' : '',
      className
    )

    return (
      <Tag {...attributes} className={classes}>
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
  activeItem: PropTypes.any
};

export default CarouselItem;