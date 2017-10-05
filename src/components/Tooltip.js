import React from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';


// import '../docs/css/tooltip.css'



 
class Tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.setVisibility = this.setVisibility.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    this.assignOutsideTouchHandler = this.assignOutsideTouchHandler.bind(this);
  }

  show() { 
    this.setVisibility(true);
  }

  hide() {
    this.setVisibility(false);
  }

  setVisibility(visible) {
    this.setState(Object.assign({}, this.state, {
      visible
    }));
  }

  handleTouch() {
    this.show();
    this.assignOutsideTouchHandler();
  }

  assignOutsideTouchHandler() {
    const handler = (e) => {
      let currentNode = e.target;
      const componentNode = ReactDOM.findDOMNode(this.refs.instance);
      while (currentNode.parentNode) {
        if (currentNode === componentNode) return;
        currentNode = currentNode.parentNode;
      }
      if (currentNode !== document) return;
      this.hide();
      document.removeEventListener('touchstart', handler);
    };
    document.addEventListener('touchstart', handler);
  }

  render() {
    const { 
      placement,
      component,
      componentStyle,
      className,
      children,
      tooltipContent,
      tooltipClass,
      arrowClass,
      componentTooltip,
      componentClass,
      tag
    } = this.props;

    const classes = classNames(
      className
    );

    const componentClasses = classNames(
      componentClass
    );

    const tooltipClasses = classNames(
      'tooltip fade',
      placement ? 'bs-tooltip-'+placement : '',
      this.state.visible ? 'show' : '',
      tooltipClass
    );

    const arrowClasses = classNames(
      'arrow',
      arrowClass
    );
    return (
      <Manager tag={tag} className={classes}>
        <Target component={component} style={componentStyle} className={componentClasses}
          onMouseEnter={this.show}
          onMouseLeave={this.hide}
          onTouchStart={this.handleTouch}
        >
          {children}
        </Target>
        {this.state.visible ? <Popper placement={placement} component={componentTooltip}>
          {({ popperProps }) =>
            <div {...popperProps} className={tooltipClasses}>
              <div className="tooltip-inner">{tooltipContent}</div>
              <Arrow>
                {({ arrowProps }) =>
                  <span {...arrowProps} className={arrowClasses}  />}
              </Arrow>
            </div>}
        </Popper> : false}
          

      </Manager>
    );
  }
}

Tooltip.propTypes = {
  placement: PropTypes.string,
  component: PropTypes.string,
  componentStyle: PropTypes.string,
  tooltipContent: PropTypes.string,
  tooltipClass: PropTypes.string,
  arrowClass: PropTypes.string,
  componentTooltip: PropTypes.string,
  componentClass: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string
};
export default Tooltip;