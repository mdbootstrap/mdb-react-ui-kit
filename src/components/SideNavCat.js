import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from './Collapse';
import Waves from './Waves';


class SideNavCat extends React.Component {
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
      className,
      name,
      icon,
      onClick,
      isOpen,
      ...attributes
    } = this.props;

    const classes = classNames(
      'collapsible-header',
      'Ripple-parent',
      'arrow-r',
      isOpen ? 'active' : false,
      className
    );

    return (
      <Tag>
        <a className = { classes } onClick = { this.onClick }
           onMouseDown = { this.handleClick.bind(this) }
           onTouchStart = { this.handleClick.bind(this) }
           {...attributes}
        >
          { icon &&
            <i className = { "fa fa-" + icon }>&nbsp;</i>
          }
          {name}
          <i className = "fa fa-angle-down rotate-icon"></i>
        <Waves cursorPos = { this.state.cursorPos } />
        </a>
        <Collapse isOpen = {isOpen} className = "collapsible-body">
          <ul>
            {children}
          </ul>
        </Collapse>
      </Tag>
    );
  }
}

SideNavCat.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};

SideNavCat.defaultProps = {
  tag: 'li',
};

export default SideNavCat;
