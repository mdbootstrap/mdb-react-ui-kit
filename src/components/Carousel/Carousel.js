import React, { Component } from 'react';
import CarouselControl from './CarouselControl';
import CarouselIndicator from './CarouselIndicator';
import CarouselIndicators from './CarouselIndicators';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Carousel.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      length: this.props.length,
      srcArray: [],
      swipeAvailable: true,
      initialX: null,
      initialY: null
    };

    this.carouselRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.interval === false) {
      return;
    }
    this.cycleInterval = setInterval(this.next, this.props.interval);

    // get images src atr
    if (this.props.thumbnails) {
      const CarouselItemsArray = this.carouselRef.current.querySelectorAll(
        '.carousel-item img'
      );

      const srcArray = Array.prototype.map.call(
        CarouselItemsArray,
        item => item.src
      );
      this.setState({ ...this.state, srcArray });
    }
  }

  componentWillUnmount() {
    if (this.props.interval === false) {
      return;
    }
    this.clearCycleIntervalHandler();
  }

  clearCycleIntervalHandler = () => clearInterval(this.cycleInterval);

  swipeAvailableHandler = () => this.setState({ swipeAvailable: true });

  restartInterval = () => {
    if (this.props.interval !== false) {
      this.clearCycleIntervalHandler();
      this.cycleInterval = setInterval(this.next, this.props.interval);
    }
  };

  next = () => {
    const nextIndex = this.state.activeItem + 1;
    const nextItem = nextIndex > this.state.length ? 1 : nextIndex;

    this.goToIndex(nextItem);
  };

  prev = () => {
    const prevIndex = this.state.activeItem - 1;
    const prevItem = prevIndex < 1 ? this.state.length : prevIndex;

    this.goToIndex(prevItem);
  };

  goToIndex = item => {
    this.setState({
      ...this.state,
      activeItem: item
    });

    this.restartInterval();
  };

  startTouch = e => {
    if (this.props.mobileGesture !== false) {
      this.setState({
        initialX: e.touches[0].clientX,
        initialY: e.touches[0].clientY
      });
    }
  };

  moveTouch = e => {
    this.setState({
      swipeAvailable: false
    });

    const { initialX, initialY } = this.state;

    if (initialX === null || initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = initialX - currentX;
    const diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        this.next();
      } else {
        this.prev();
      }
    }

    this.setState({
      initialX: null,
      initialY: null
    });
  };

  getChildContext() {
    return {
      activeItem: this.state.activeItem,
      length: this.state.length,
      slide: this.props.slide
    };
  }

  render() {
    const {
      activeItem,
      children,
      className,
      mobileGesture,
      multiItem,
      slide,
      thumbnails,
      interval,
      testimonial,
      tag: Tag,
      length,
      showControls,
      showIndicators,
      onHoverStop,
      ...attributes
    } = this.props;

    const { swipeAvailable } = this.state;
    let ariaLabel = 'carousel';

    const classes = classNames(
      'carousel',
      multiItem ? 'carousel-multi-item' : 'carousel-fade',
      thumbnails ? 'carousel-thumbnails' : '',
      testimonial ? 'testimonial-carousel' : '',
      className
    );

    const CarouselIndicatorsArray = [];
    for (let i = 1; i <= this.state.length; i++) {
      CarouselIndicatorsArray.push(
        <CarouselIndicator
          img={thumbnails ? this.state.srcArray[i - 1] : null}
          key={i}
          active={this.state.activeItem === i}
          onClick={() => this.goToIndex(i)}
        />
      );
    }

    const isMultiItem = multiItem ? true : false;
    const isTestimonial = testimonial ? true : false;

    return (
      <Tag
        data-test='carousel'
        ref={this.carouselRef}
        {...attributes}
        className={classes}
        aria-label={ariaLabel}
        onTouchStart={this.startTouch}
        onTouchMove={swipeAvailable ? this.moveTouch : null}
        onTouchEnd={this.swipeAvailableHandler}
        onMouseEnter={onHoverStop ? this.clearCycleIntervalHandler : false}
        onMouseLeave={onHoverStop ? this.restartInterval : false}
      >
        {showControls && multiItem && (
          <div className='controls-top'>
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              iconLeft
              className='btn-floating'
              direction='prev'
              role='button'
              onClick={this.prev}
            />
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              iconRight
              className='btn-floating'
              direction='next'
              role='button'
              onClick={this.next}
            />
          </div>
        )}
        {children}
        {showControls && !multiItem && (
          <React.Fragment>
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              direction='prev'
              role='button'
              onClick={this.prev}
            />
            <CarouselControl
              testimonial={isTestimonial}
              multiItem={isMultiItem}
              direction='next'
              role='button'
              onClick={this.next}
            />
          </React.Fragment>
        )}
        {showIndicators && (
          <CarouselIndicators>{CarouselIndicatorsArray}</CarouselIndicators>
        )}
      </Tag>
    );
  }
}

Carousel.propTypes = {
  activeItem: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  mobileGesture: PropTypes.bool,
  multiItem: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  thumbnails: PropTypes.bool,
  testimonial: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  length: PropTypes.number,
  onHoverStop: PropTypes.bool
};

Carousel.defaultProps = {
  mobileGesture: true,
  tag: 'div',
  interval: 6000,
  showControls: true,
  showIndicators: true,
  onHoverStop: true
};

Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

export default Carousel;
export { Carousel as MDBCarousel };
