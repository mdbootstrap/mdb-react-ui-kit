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
  state = {
    id: this.props.id,
    collapse: HIDDEN,
    height: null
  };

  element = null;

  componentDidMount() {
    const { isOpen } = this.props;
    const { collapse, id } = this.state;

    if ((isOpen === id || isOpen === true) && collapse === HIDDEN) {
      this.openCollapse();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.props;
    const { collapse } = this.state;

    const willOpen = typeof isOpen !== 'boolean' ? isOpen === prevState.id : isOpen;

    if (willOpen && collapse === HIDDEN) {
      this.openCollapse();
    } else if (!willOpen && prevState.collapse === SHOWN) {
      this.closeCollapse();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTag);
  }

  setTransitionTag = (collapse, callback, delayType) => {
    this.transitionTag = setTimeout(() => {
      this.setState(
        {
          collapse,
          height: null
        },
        callback()
      );
    }, this.getDelay(delayType));
  };

  openCollapse = () => {
    const { onOpened } = this.props;

    this.setState({ collapse: SHOW }, () => {
      this.setState({ height: this.getHeight() });
      this.setTransitionTag(SHOWN, onOpened, 'show');
    });
  };

  closeCollapse = () => {
    const { onClosed } = this.props;
    this.setState({ height: this.getHeight() }, () => {
      this.setState(
        {
          collapse: HIDE,
          height: this.getHeight()
        },
        () => {
          this.setState({ height: 0 });
        }
      );
    });

    this.setTransitionTag(HIDDEN, onClosed, 'hide');
  };

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
    const { navbar, children, className, isOpen, delay, onOpened, onClosed, ...attributes } = this.props;

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

    const classes = classNames(collapseClass, navbar ? 'navbar-collapse' : false, className);

    const style = height === null ? null : { height };

    return (
      <div
        data-test='collapse'
        {...attributes}
        style={{ ...attributes.style, ...style }}
        className={classes}
        ref={c => {
          this.element = c;
        }}
      >
        {children}
      </div>
    );
  }
}

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({ hide: PropTypes.number, show: PropTypes.number })]),
  id: PropTypes.string,
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  navbar: PropTypes.bool,
  onClosed: PropTypes.func,
  onOpened: PropTypes.func
};

Collapse.defaultProps = {
  isOpen: '',
  delay: DEFAULT_DELAYS,
  onOpened: () => {},
  onClosed: () => {}
};
export default Collapse;
export { Collapse as MDBCollapse };
