import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';


/*
https://github.com/nkbt/react-collapse

*/


const SPRING_PRECISION = 1;


const WAITING = 'WAITING';
const RESIZING = 'RESIZING';
const RESTING = 'RESTING';
const IDLING = 'IDLING';


const noop = () => null;
const css = {
  collapse: 'ReactCollapse--collapse',
  content: 'ReactCollapse--content'
};


class Collapse2 extends React.PureComponent {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
    springConfig: PropTypes.objectOf(PropTypes.number),
    forceInitialAnimation: PropTypes.bool,

    hasNestedCollapse: PropTypes.bool,

    fixedHeight: PropTypes.number,

    theme: PropTypes.objectOf(PropTypes.string),
    style: PropTypes.object,

    onRender: PropTypes.func,
    onRest: PropTypes.func,
    onMeasure: PropTypes.func,

    children: PropTypes.node.isRequired
  };


  static defaultProps = {
    springConfig: {},
    forceInitialAnimation: false,
    hasNestedCollapse: false,
    fixedHeight: -1,
    style: {},
    theme: css,
    onRender: noop,
    onRest: noop,
    onMeasure: noop
  };


  constructor(props) {
    super(props);
    this.state = {
      currentState: IDLING,
      from: 0,
      to: 0
    };
  }


  componentDidMount() {
    const {isOpened, forceInitialAnimation, onRest} = this.props;
    if (isOpened) {
      const to = this.getTo();
      if (forceInitialAnimation) {
        const from = this.wrapper.clientHeight;
        this.setState({currentState: RESIZING, from, to});
      } else {
        this.setState({currentState: IDLING, from: to, to});
      }
    }
    onRest();
  }


  componentWillReceiveProps(nextProps) {
      console.log("COLLAPSE ReceiveProps nextProps", nextProps);
    if (nextProps.hasNestedCollapse) {
      // For nested collapses we do not need to change to waiting state
      // and should keep `height:auto`
      // Because children will be animated and height will not jump anyway
      // See https://github.com/nkbt/react-collapse/issues/76 for more details
      if (nextProps.isOpened !== this.props.isOpened) {
        // Still go to WAITING state if own isOpened was changed
        this.setState({currentState: WAITING});
      }
    } else if (this.state.currentState === IDLING && (nextProps.isOpened || this.props.isOpened)) {
      this.setState({currentState: WAITING});
    }
  }


  componentDidUpdate(_, prevState) {
    const {isOpened, onRest, onMeasure} = this.props;

    if (this.state.currentState === IDLING) {
      onRest();
      return;
    }

    if (prevState.to !== this.state.to) {
      onMeasure({height: this.state.to, width: this.content.clientWidth});
    }

    const from = this.wrapper.clientHeight;
    const to = isOpened ? this.getTo() : 0;

    if (from !== to) {
      this.setState({currentState: RESIZING, from, to});
      return;
    }

    if (this.state.currentState === RESTING || this.state.currentState === WAITING) {
      this.setState({currentState: IDLING, from, to});
    }
  }


  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  }


  onContentRef = content => {
    this.content = content;
  };


  onWrapperRef = wrapper => {
    this.wrapper = wrapper;
  };


  onRest = () => {
    this.raf = requestAnimationFrame(this.setResting);
  };


  setResting = () => {
    this.setState({currentState: RESTING});
  };


  getTo = () => {
    const {fixedHeight} = this.props;
    return (fixedHeight > -1) ? fixedHeight : this.content.clientHeight;
  };


  getWrapperStyle = height => {
    if (this.state.currentState === IDLING && this.state.to) {
      const {fixedHeight} = this.props;
      if (fixedHeight > -1) {
        return {overflow: 'hidden', height: fixedHeight};
      }
      return {height: 'auto'};
    }

    if (this.state.currentState === WAITING && !this.state.to) {
      return {overflow: 'hidden', height: 0};
    }

    return {overflow: 'hidden', height: Math.max(0, height)};
  };


  getMotionProps = () => {
    const {springConfig} = this.props;

    return this.state.currentState === IDLING ? {
      // When completely stable, instantly jump to the position
      defaultStyle: {height: this.state.to},
      style: {height: this.state.to}
    } : {
      // Otherwise, animate
      defaultStyle: {height: this.state.from},
      style: {height: spring(this.state.to, {precision: SPRING_PRECISION, ...springConfig})}
    };
  };


  renderContent = ({height}) => { // eslint-disable-line
    const {
      isOpened: _isOpened,
      springConfig: _springConfig,
      forceInitialAnimation: _forceInitialAnimation,
      hasNestedCollapse: _hasNestedCollapse,
      fixedHeight: _fixedHeight,
      theme,
      style,
      onRender,
      onRest: _onRest,
      onMeasure: _onMeasure,
      children,
      ...props
    } = this.props;

    const {
      from,
      to
    } = this.state;

    // DANGEROUS, use with caution, never do setState with it
    onRender({current: height, from, to});

    return (
      <div
        ref={this.onWrapperRef}
        className={theme.collapse}
        style={{...this.getWrapperStyle(Math.max(0, height)), ...style}}
        {...props}>
        <div ref={this.onContentRef} className={theme.content}>{children}</div>
      </div>
    );
  };


  render() {
    return (
      <Motion {...this.getMotionProps()} onRest={this.onRest}>
        {this.renderContent}
      </Motion>
    );
  }
}

export default Collapse2;