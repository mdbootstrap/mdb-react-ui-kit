import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CarouselFade.css';

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  componentDidMount() {
    this.cycleInterval = setInterval(() => {
      this.props.next();
    }, 5000);
  }

  getChildContext() {
    return {
      activeItem: this.state.activeItem
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      activeItem: nextProps.activeItem
    }
  }

  render() {
     let {
      active,
      activeItem,
      fade,
      next,
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    let ariaLabel = 'carousel';

    const classes = classNames(
      'carousel',
      'carousel-fade',
      className
    )

    return (
      <Tag {...attributes} className={classes} aria-label={ariaLabel}>
        {children}
      </Tag>
    );
  }
}

Carousel.propTypes = {
  active: PropTypes.string,
  activeItem: PropTypes.any,
  next: PropTypes.func.isRequired,
  // fade: PropTypes.oneOfType([PropTypes.boolean, PropTypes.string]),  
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

Carousel.defaultProps = {
  tag: 'div',
};

Carousel.childContextTypes = {
  activeItem: PropTypes.any
};

export default Carousel;