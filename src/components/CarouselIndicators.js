import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CarouselIndicators extends Component {

  render() {

    let {
      children,
      className,
      ...attributes
    } = this.props;

    let classes = classNames(
      'carousel-indicators',
      className
    );

    return (
      <ol {...attributes} className={classes}>
        {children}
      </ol>
    );
  }
}

CarouselIndicators.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

CarouselIndicators.defaultProps = {
  className: ''
};

export default CarouselIndicators;
export { CarouselIndicators as MDBCarouselIndicators };
