import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import './DropdownMenu.css';
let DropdownMenuComponent;
try {
  DropdownMenuComponent = require('./pro/DropdownMenuProComponent').default;
} catch(err) {
  DropdownMenuComponent = require('./DropdownMenuComponent').default;
}

const noFlipModifier = { flip: { enabled: false } };

class DropdownMenu extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { basic, className, right, children, tag, flip, ...attrs } = this.props;

    const classes = classNames(
      'dropdown-menu',
      {
        'dropdown-menu-right': right,
        'show': this.context.isOpen,
        'basic': basic
      },
      className
    );

    let Tag = tag;

    if (this.context.isOpen) {
      Tag = Popper;
      const position1 = this.context.dropup ? 'top' : 'bottom';
      const position2 = right ? 'end' : 'start';
      attrs.placement = `${position1}-${position2}`;
      attrs.component = tag;
      attrs.modifiers = !flip ? noFlipModifier : undefined;
    }

    return (
      <DropdownMenuComponent
        isOpen={this.context.isOpen}
        d_tag={Tag}
        d_tabIndex="-1"
        d_role="menu"
        d_attributes={attrs}
        d_aria={!this.context.isOpen}
        d_classes={classes}
        d_key="dropDownMenu"
      >
        {children}
      </DropdownMenuComponent>
    );
  }
}


DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  basic: PropTypes.bool,
  className: PropTypes.string,
  flip: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.string
};

DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: false,
  right: false,
  tag: 'div'
};

DropdownMenu.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired
};

export default DropdownMenu;
export { DropdownMenu as MDBDropdownMenu };
