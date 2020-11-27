import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CarouselContext from '../CarouselContext';

const CarouselCaption = props => {
  const { children, className, tag: Tag, ...attributes } = props;

  const classes = classNames('carousel-caption', className);

  return (
    <CarouselContext.Consumer>
      {({}) => {
        return (
          <Tag data-test='carousel-caption' {...attributes} className={classes}>
            {children}
          </Tag>
        );
      }}
    </CarouselContext.Consumer>
  );
};

CarouselCaption.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CarouselCaption.defaultProps = {
  tag: 'div'
};

export default CarouselCaption;
export { CarouselCaption as MDBCarouselCaption };
