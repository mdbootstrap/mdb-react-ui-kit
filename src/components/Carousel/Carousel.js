import React, { Component } from "react";
import CarouselControl from "./CarouselControl";
import CarouselIndicator from "./CarouselIndicator";
import CarouselIndicators from "./CarouselIndicators";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
      length: this.props.length,
      slide: this.props.slide,
      srcArray: [],
      swipeAvailable: true,
      initialX: null,
      initialY: null
    };

    this.carouselRef = React.createRef();
  }

  restartInterval = () => {
    if (this.props.interval !== false) {
      clearInterval(this.cycleInterval);
      this.cycleInterval = setInterval(this.next, this.props.interval);
    }
  };

  next = () => {
    let nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.length) {
      this.setState({ ...this.state, activeItem: 1 });
    } else {
      this.setState({ ...this.state, activeItem: nextItem });
    }
    this.restartInterval();
  };

  prev = () => {
    let prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({ ...this.state, activeItem: this.state.length });
    } else {
      this.setState({ ...this.state, activeItem: prevItem });
    }
    this.restartInterval();
  };

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        ...this.state,
        activeItem: item
      });
    }
    this.restartInterval();
  }

  startTouch(e) {
    this.setState({
      initialX: e.touches[0].clientX,
      initialY: e.touches[0].clientY
    });
  }

  moveTouch(e) {
    this.setState({
      swipeAvailable: false
    });

    let { initialX, initialY } = this.state;
    if (initialX === null) {
      return;
    }
    if (initialY === null) {
      return;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;

    let diffX = initialX - currentX;
    let diffY = initialY - currentY;

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
  }

  componentDidMount = () => {
    if (this.props.interval === false) {
      return;
    }
    this.cycleInterval = setInterval(this.next, this.props.interval);

    // get images src atr
    if (this.props.thumbnails) {
      const CarouselItemsArray = this.carouselRef.current.querySelectorAll(
        ".carousel-item img"
      );
      const srcArray = Array.prototype.map.call(
        CarouselItemsArray,
        item => item.src
      );
      this.setState({ ...this.state, srcArray });
    }
  };

  componentWillUnmount() {
    if (this.props.interval === false) {
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

  render() {
    const {
      activeItem,
      children,
      className,
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

    let ariaLabel = "carousel";

    const classes = classNames(
      "carousel",
      multiItem ? "carousel-multi-item" : "carousel-fade",
      thumbnails ? "carousel-thumbnails" : "",
      testimonial ? "testimonial-carousel" : "",
      className
    );

    const CarouselIndicatorsArray = [];
    for (let i = 1; i <= this.state.length; i++) {
      CarouselIndicatorsArray.push(
        <CarouselIndicator
          img={thumbnails ? this.state.srcArray[i - 1] : null}
          key={i}
          active={this.state.activeItem === i ? true : false}
          onClick={() => {
            this.goToIndex(i);
          }}
        />
      );
    }

    return (
      <Tag
        ref={this.carouselRef}
        {...attributes}
        className={classes}
        aria-label={ariaLabel}
        onTouchStart={touchStart => this.startTouch(touchStart)}
        onTouchMove={touchMove =>
          this.state.swipeAvailable ? this.moveTouch(touchMove) : null
        }
        onTouchEnd={() => this.setState({ swipeAvailable: true })}
        
        onMouseEnter={()=> onHoverStop ? clearInterval(this.cycleInterval) : false}
        onMouseLeave={()=> onHoverStop ? this.restartInterval() : false}
      >
        {showControls && multiItem && (
          <div className="controls-top">
            <CarouselControl
              testimonial={testimonial ? true : false}
              multiItem={multiItem ? true : false}
              iconLeft
              className="btn-floating"
              direction="prev"
              role="button"
              onClick={this.prev}
            />
            <CarouselControl
              testimonial={testimonial ? true : false}
              multiItem={multiItem ? true : false}
              iconRight
              className="btn-floating"
              direction="next"
              role="button"
              onClick={this.next}
            />
          </div>
        )}
        {children}
        {showControls && !multiItem && (
          <React.Fragment>
            <CarouselControl
              testimonial={testimonial ? true : false}
              multiItem={multiItem ? true : false}
              direction="prev"
              role="button"
              onClick={this.prev}
            />
            <CarouselControl
              testimonial={testimonial ? true : false}
              multiItem={multiItem ? true : false}
              direction="next"
              role="button"
              onClick={this.next}
            />
          </React.Fragment>
        )}
        <CarouselIndicators>
          {showIndicators && CarouselIndicatorsArray}
        </CarouselIndicators>
      </Tag>
    );
  }
}

Carousel.propTypes = {
  activeItem: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
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
  tag: "div",
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
