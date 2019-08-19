import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CarouselCaption = props => {
  let { children, className, tag: Tag, ...attributes } = props;

  const classes = classNames('carousel-caption', className);

  return (
    <Tag data-test='carousel-caption' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

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
export { CarouselCaption as MDBCarouselCaption };
