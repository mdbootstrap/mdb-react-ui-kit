import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CarouselIndicator = props => {
  const { active, alt, children, className, img, ...attributes } = props;

  const classes = classNames(active && 'active', className);

  return (
    <li data-test='carousel-indicator' {...attributes} className={classes}>
      {img && <img src={img} alt={alt} className='img-fluid' />}
      {children}
    </li>
  );
};

CarouselIndicator.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.string
};

CarouselIndicator.defaultProps = {
  alt: 'Carousel thumbnail',
  className: '',
  img: ''
};

export default CarouselIndicator;
export { CarouselIndicator as MDBCarouselIndicator };
