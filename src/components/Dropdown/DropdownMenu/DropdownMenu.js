import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import DropdownMenuComponent from '../DropdownMenuComponent';
import './DropdownMenu.css';

class DropdownMenu extends Component {
  render() {
    const {
      basic,
      children,
      className,
      color,
      flip,
      modifiers,
      right,
      tag,
      ...attrs
    } = this.props;

    const { isOpen, dropup, dropright, dropleft } = this.context;

    const classes = classNames(
      {
        'dropdown-menu-right': right,
        [`dropdown-${color}`]: color,
        show: isOpen,
        basic
      },
      'dropdown-menu',
      className
    );

    const Tag = tag;

    if (isOpen) {
      const position1 = dropup
        ? 'top'
        : dropright
        ? 'right'
        : dropleft
        ? 'left'
        : 'bottom';

      const position2 = right ? 'end' : 'start';

      attrs.placement = `${position1}-${position2}`;
      attrs.component = tag;
    }

    return (
      <Popper
        modifiers={modifiers || (!flip && { flip: { enabled: false } })}
        eventsEnabled
        positionFixed={false}
        placement={attrs.placement}
        data-test='dropdown-menu'
      >
        {({ placement, ref, style }) => (
          <Tag
            ref={ref}
            style={style}
            data-placement={placement}
            className={classes}
          >
            <DropdownMenuComponent
              isOpen={isOpen}
              tag={Tag}
              tabIndex='-1'
              role='menu'
              attributes={attrs}
              aria={!isOpen}
              d_key='dropDownMenu'
              color={color}
            >
              {children}
            </DropdownMenuComponent>
          </Tag>
        )}
      </Popper>
    );
  }
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  basic: PropTypes.bool,
  className: PropTypes.string,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  right: PropTypes.bool,
  tag: PropTypes.string
};

DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: true,
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
