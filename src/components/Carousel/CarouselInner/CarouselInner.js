import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CarouselContext from '../CarouselContext';

const CarouselInner = props => {
  const { active, children, childrenCount, className, tag: Tag, ...attributes } = props;

  const classes = classNames('carousel-inner', active ? 'active' : '', className);
  return (
    <CarouselContext.Consumer>
      {({}) => {
        return (
          <Tag data-test='carousel-inner' {...attributes} className={classes}>
            {children}
          </Tag>
        );
      }}
    </CarouselContext.Consumer>
  );
};

CarouselInner.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  childrenCount: PropTypes.number,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CarouselInner.defaultProps = {
  tag: 'div'
};

export default CarouselInner;
export { CarouselInner as MDBCarouselInner };
