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
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.cycleInterval);
  }

  getChildContext() {
    return {
      activeItem: this.state.activeItem
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeItem: nextProps.activeItem
    });
  }

  render() {
    let {
      active,
      activeItem,
      next,
      children,
      className,
      multiItem,
      thumbnails,
      interval,
      tag: Tag,
      ...attributes
    } = this.props;

    let ariaLabel = 'carousel';

    const classes = classNames(
      'carousel',
      'carousel-fade',
      this.props.multiItem ? 'carousel-multi-item' : '',
      this.props.thumbnails ? 'carousel-thumbnails' : '',
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
  interval: PropTypes.number,
  thumbnails: PropTypes.bool
};

Carousel.defaultProps = {
  tag: 'div',
  interval: 6000
};

Carousel.childContextTypes = {
  activeItem: PropTypes.any
};

export default Carousel;