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
      collapse: props.isOpen ? SHOWN : HIDDEN,
      height: null
    };
    this.element = null;
  }

  componentWillReceiveProps(nextProps) {
    const willOpen = nextProps.isOpen;
    const collapse = this.state.collapse;

    if (willOpen && collapse === HIDDEN) {
      // will open
      this.setState({ collapse: SHOW }, () => {
        // the height transition will work after class "collapsing" applied
        this.setState({ height: this.getHeight() });
        this.transitionTag = setTimeout(() => {
          this.setState({
            collapse: SHOWN,
            height: null
          });
        }, this.getDelay('show'));
      });
    } else if (!willOpen && collapse === SHOWN) {
      // will hide
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
        });
      }, this.getDelay('hide'));
    }
    // else: do nothing.
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.collapse === SHOWN &&
        prevState &&
        prevState.collapse !== SHOWN) {
      this.props.onOpened();
    }

    if (this.state.collapse === HIDDEN &&
        prevState &&
        prevState.collapse !== HIDDEN) {
      this.props.onClosed();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTag);
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
  isOpen: PropTypes.bool,
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
  isOpen: false,
  delay: DEFAULT_DELAYS,
  onOpened: () => {},
  onClosed: () => {}
};
export default Collapse;