import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Animation extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    isVisible: !this.props.reveal,
    // eslint-disable-next-line react/destructuring-assignment
    revealed: !this.props.reveal,
    countIterations: 0
  };

  elemRef = React.createRef();

  componentDidMount() {
    const { reveal } = this.props;

    if (reveal) {
      window.addEventListener('scroll', this.updatePredicate);
      this.updatePredicate();
    }
  }

  componentWillUnmount() {
    const { reveal } = this.props;

    if (reveal) {
      window.removeEventListener('scroll', this.updatePredicate);
    }
  }

  updatePredicate = () => {
    const windowHeight = window.innerHeight;
    const scroll = window.scrollY;
    const docHeight = document.documentElement.offsetHeight;
    const { revealed } = this.state;
    const currentRef = this.elemRef.current;

    if (
      (windowHeight + scroll - 100 > this.getOffset(currentRef) &&
        scroll < this.getOffset(currentRef)) ||
      (windowHeight + scroll - 100 >
        this.getOffset(currentRef) + currentRef.clientHeight &&
        scroll < this.getOffset(currentRef) + currentRef.clientHeight) ||
      (windowHeight + scroll === docHeight &&
        this.getOffset(currentRef) + 100 > docHeight)
    ) {
      this.setState({
        isVisible: true,
        revealed: true
      });
    } else if (!revealed) {
      this.setState({
        isVisible: false,
        revealed: true
      });
    }
  };

  handleStart = () => {
    const { onAnimationStart } = this.props;
    const { countIterations } = this.state;

    this.setState({
      countIterations: countIterations + 1
    });
    if (onAnimationStart) {
      onAnimationStart();
    }
  };

  handleIteration = () => {
    const { onAnimationIteration } = this.props;
    const { countIterations } = this.state;

    if (onAnimationIteration) {
      this.setState({
        countIterations: countIterations + 1
      });
      onAnimationIteration();
    }
  };

  handleEnd = () => {
    const { onAnimationEnd, count } = this.props;
    const { countIterations } = this.state;

    this.setState({
      countIterations: countIterations + 1
    });
    if (onAnimationEnd && count === countIterations) {
      onAnimationEnd();
    }
  };

  getOffset = elem => {
    const box = elem.getBoundingClientRect();
    const { body } = document;
    const docEl = document.documentElement;
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const top = box.top + scrollTop - clientTop;
    return Math.round(top);
  };

  render() {
    const {
      children,
      className,
      count,
      delay,
      duration,
      infinite,
      reveal,
      style,
      tag: Tag,
      type,
      ...attributes
    } = this.props;

    const { isVisible, revealed } = this.state;

    const styleObject = {
      animationDuration: duration,
      animationDelay: delay,
      animationIterationCount: infinite ? false : count,
      visibility: isVisible ? 'visible' : 'hidden',
      animationName: type
    };

    const hiddenStyles = {
      animationName: 'none',
      visibility: 'hidden'
    };

    const getAllStyles = Object.assign(styleObject, style);

    const classes = classNames(
      isVisible && 'animated',
      type && type,
      infinite && 'infinite',
      className
    );

    return (
      <Tag
        data-test='animation'
        className={classes}
        onAnimationEnd={this.handleEnd}
        onAnimationIteration={this.handleIteration}
        onAnimationStart={this.handleStart}
        ref={this.elemRef}
        style={isVisible && revealed ? getAllStyles : hiddenStyles}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes}
      >
        {children}
      </Tag>
    );
  }
}

Animation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  count: PropTypes.number,
  delay: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  infinite: PropTypes.bool,
  onAnimationEnd: PropTypes.func,
  onAnimationIteration: PropTypes.func,
  onAnimationStart: PropTypes.func,
  reveal: PropTypes.bool,
  style: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};

Animation.defaultProps = {
  tag: 'div',
  reveal: false,
  duration: 1,
  count: 1
};

export default Animation;
export { Animation as MDBAnimation };
