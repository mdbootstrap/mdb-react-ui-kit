import React from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Transition from 'react-motion-ui-pack';
import outy from 'outy';


// import '../docs/css/tooltip.css'
 
class Popover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this._setOusideTap = this._setOusideTap.bind(this);
    this._handleOutsideTap = this._handleOutsideTap.bind(this);
    this._handleTargetClick = this._handleTargetClick.bind(this);
  }


  componentDidMount() {
    this._setOusideTap();
  }

  componentDidUpdate(lastProps, lastState) {
    if (lastState.isOpen !== this.state.isOpen) {
      setTimeout(() => this._setOusideTap());
    }
  }

  componentWillUnmount() {
    this.outsideTap.remove();
  }

  _setOusideTap() {
    const elements = [this.target];

    if (this.popper) {
      elements.push(this.popper);
    }

    if (this.outsideTap) {
      this.outsideTap.remove();
    }

    this.outsideTap = outy(
      elements,
      ['click', 'touchstart'],
      this._handleOutsideTap
    );
  }

  _handleOutsideTap() {
    this.setState({ isOpen: false });
  }

  _handleTargetClick() {
    this.setState({ isOpen: true });
  }

  render() {
    const { 
      placement,
      component,
      componentStyle,
      className,
      children,
      componentPopover,
      popoverBody,
      popoverClass,
      arrowClass,
      tag
    } = this.props;

    const classes = classNames(
      className
    );

    const popoverClasses = classNames(
      'popover',
      placement ? 'bs-popover-'+placement : '',
      popoverClass
    );

    const arrowClasses = classNames(
      'arrow',
      arrowClass
    );
    return (
      <Manager tag={tag}>
        <Target
          innerRef={c => (this.target = findDOMNode(c))}
          component={component}
          style={componentStyle} 
          className={classes}
          onClick={this._handleTargetClick}
        >
          {popoverBody}
        </Target>
        <Transition
          component={false}
          enter={{ opacity: 1, scale: 1 }}
          leave={{ opacity: 0, scale: 0.9 }}
        >
          {this.state.isOpen &&
              <Popper
                key="popover"
                component={componentPopover}
                innerRef={c => {
                  this.popper = findDOMNode(c);
                }}
                placement={placement}
                className={popoverClasses}
              >
                <div className="popover-inner">
                  {children}
                </div>
                <Arrow className={arrowClasses} />
              </Popper>}
        </Transition>
      </Manager>
    );
  }
}

Popover.propTypes = {
  placement: PropTypes.string,
  component: PropTypes.string,
  componentStyle: PropTypes.string,
  componentPopover: PropTypes.string,
  popoverBody: PropTypes.string,
  arrowClass: PropTypes.string,
  popoverClass: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string
};

export default Popover;