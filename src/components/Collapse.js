import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SHOW = 'SHOW';
const SHOWN = 'SHOWN';
const HIDE = 'HIDE';
const HIDDEN = 'HIDDEN';

const DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      collapse: HIDDEN,
      height: null
    };
    this.element = null;
  }

  componentDidMount() {
    if((this.props.isOpen === this.state.id || this.props.isOpen === true) && this.state.collapse === HIDDEN) {
      this.openCollapse();
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    const collapse = prevState.collapse;
    const willOpen = typeof this.props.isOpen !== 'boolean' 
      ? this.props.isOpen === prevState.id 
      : this.props.isOpen;

    if(willOpen && this.state.collapse === HIDDEN) {
      this.openCollapse();
    }
    else if(!willOpen && collapse === SHOWN) {
      this.closeCollapse();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTag);
  }

  openCollapse = () => {
    this.setState({ collapse: SHOW }, () => {
      this.setState({ height: this.getHeight() });
      this.transitionTag = setTimeout(() => {
        this.setState({
          collapse: SHOWN,
          height: null
        }, this.props.onOpened());
      }, this.getDelay('show'));
    });
  }

  closeCollapse = () => {
    this.setState({ height: this.getHeight() }, () => {
      this.setState({
        collapse: HIDE,
        height: this.getHeight()
      }, () => {
        this.setState({ height: 0 });
      });
    });

    this.transitionTag = setTimeout(() => {
      this.setState({
        collapse: HIDDEN,
        height: null
      }, this.props.onClosed());
    }, this.getDelay('hide'));
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  getHeight() {
    return this.element.scrollHeight;
  }

  render() {
    const {
      navbar,
      children,
      className,
      isOpen,
      delay,
      onOpened,
      onClosed,
      ...attributes
    } = this.props;

    const { collapse, height } = this.state;
    let collapseClass;
    switch (collapse) {
    case SHOW:
      collapseClass = 'collapsing';
      break;
    case SHOWN:
      collapseClass = 'collapse show';
      break;
    case HIDE:
      collapseClass = 'collapsing';
      break;
    case HIDDEN:
      collapseClass = 'collapse';
      break;
    default:
      // HIDDEN
      collapseClass = 'collapse';
    }

    const classes = classNames(
      collapseClass,
      navbar ? 'navbar-collapse' : false,
      className,
    );
    const style = height === null ? null : { height };
    return (
      <div
        {...attributes}
        style={{ ...attributes.style, ...style }}
        className={classes}
        ref={(c) => { this.element = c; }}
      >
        {children}
      </div>
    );
  }
}

Collapse.propTypes = {
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.string,
  className: PropTypes.node,
  children: PropTypes.node,
  navbar: PropTypes.bool,
  delay: PropTypes.oneOfType([
    PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }),
    PropTypes.number
  ]),
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};

Collapse.defaultProps = {
  isOpen: '',
  delay: DEFAULT_DELAYS,
  onOpened: () => {},
  onClosed: () => {}
};
export default Collapse;
export { Collapse as MDBCollapse };
