import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from './Waves';

class SideNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.onClick = this.onClick.bind(this);
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      tag: Tag,
      children,
      href,
      className,
      innerRef,
      ...attributes
    } = this.props;

    const classes = classNames(
      'Ripple-parent',
      className
    );



    return (
      <Tag
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
        onMouseDown={ this.handleClick.bind(this) }
        onTouchStart={ this.handleClick.bind(this) }
        {...attributes}
      >
        <a className={classes} href={href}>{children}<Waves cursorPos={ this.state.cursorPos } /></a>
      </Tag>
    );
  }
}

SideNavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tag: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

SideNavItem.defaultProps = {
  tag: 'li',
};

export default SideNavItem;


