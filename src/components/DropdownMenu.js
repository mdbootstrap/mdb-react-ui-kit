import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import './DropdownMenu.css';

import DropdownMenuComponent from './DropdownMenuComponent';

const noFlipModifier = { flip: { enabled: false } };

class DropdownMenu extends Component {
  render() {
    const {
      basic,
      className,
      right,
      children,
      tag,
      flip,
      color,
      ...attrs
    } = this.props;

    const classes = classNames(
      'dropdown-menu',
      color && `dropdown-${color}`,
      {
        'dropdown-menu-right': right,
        show: this.context.isOpen,
        basic: basic
      },
      className
    );

    let Tag = tag;

    if (this.context.isOpen) {
      const position1 = this.context.dropup ? 'top' : this.context.dropright ? 'right' : this.context.dropleft ? 'left' : 'bottom';
      const position2 = right ? 'end' : 'start';
      attrs.placement = `${position1}-${position2}`;
      attrs.component = tag;
      attrs.modifiers = !flip ? noFlipModifier : undefined;
    }

    return (
      <Popper
        modifires={attrs.modifiers}
        eventsEnabled={true}
        positionFixed={false}
        placement={attrs.placement}
      >
        {
          ({ placement, ref, style }) => (
            <Tag ref={ref} style={style} data-placement={placement} className={classes}>
              <DropdownMenuComponent
                isOpen={this.context.isOpen}
                tag={Tag}
                tabIndex="-1"
                role="menu"
                attributes={attrs}
                aria={!this.context.isOpen}
                d_key="dropDownMenu"
                color={color}
              >
                {children}
              </DropdownMenuComponent>
            </Tag>
          )
        }
      </Popper>
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
  tag: 'div',
  color: false
};

DropdownMenu.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  dropright: PropTypes.bool.isRequired,
  dropleft: PropTypes.bool.isRequired,
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'default',
      'secondary',
      'success',
      'dark',
      'danger',
      'info',
      'warning',
      'ins'
    ]),
    PropTypes.bool
  ])
};

export default DropdownMenu;
export { DropdownMenu as MDBDropdownMenu };
