import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Carousel.css';

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      length: this.props.length,
      slide: this.props.slide
    };
  }

  componentDidMount() {
    if(this.props.interval === false) {
      return;
    }
    this.cycleInterval = setInterval(() => {
      this.props.next();
    }, this.props.interval);
  }

  componentWillUnmount() {
    if(this.props.interval === false) {
      return;
    }
    clearInterval(this.cycleInterval);
  }

  getChildContext() {
    return {
      activeItem: this.state.activeItem,
      length: this.state.length,
      slide: this.state.slide
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeItem: nextProps.activeItem
    });
    if(this.props.interval !== false) {
      clearInterval(this.cycleInterval);
      this.cycleInterval = setInterval(() => {
        this.props.next();
      }, this.props.interval);  
    }
  }

  render() {
    let {
      active,
      activeItem,
      next,
      children,
      className,
      multiItem,
      slide,
      thumbnails,
      interval,
      testimonial,
      tag: Tag,
      ...attributes
    } = this.props;

    let ariaLabel = 'carousel';

    const classes = classNames(
      'carousel',
      'carousel-fade',
      this.props.multiItem ? 'carousel-multi-item' : '',
      this.props.thumbnails ? 'carousel-thumbnails' : '',
      this.props.testimonial ? 'testimonial-carousel' : '',
      className
    );

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
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  multiItem: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  thumbnails: PropTypes.bool
};

Carousel.defaultProps = {
  tag: 'div',
  interval: 6000
};

Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

export default Carousel;