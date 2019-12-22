import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CarouselIndicators = props => {
  const { children, className, ...attributes } = props;

  const classes = classNames('carousel-indicators', className);

  return (
    <ol data-test='carousel-indicators' {...attributes} className={classes}>
      {children}
    </ol>
  );
};

CarouselIndicators.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

CarouselIndicators.defaultProps = {
  className: ''
};

export default CarouselIndicators;
export { CarouselIndicators as MDBCarouselIndicators };
