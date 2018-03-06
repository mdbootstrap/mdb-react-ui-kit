import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';
import Transition from 'react-motion-ui-pack';

const noFlipModifier = { flip: { enabled: false } };

const DropdownMenu = (props, context) => {
  const { className, right, children,tag, flip, ...attrs } = props;
  const classes = classNames(
    'dropdown-menu',
    {
      'dropdown-menu-right': right,
      'show': context.isOpen
    },
    className
  );

  let Tag = tag;

  if (context.isOpen) {
    Tag = Popper;
    const position1 = context.dropup ? 'top' : 'bottom';
    const position2 = right ? 'end' : 'start';
    attrs.placement = `${position1}-${position2}`;
    attrs.component = tag;
    attrs.modifiers = !flip ? noFlipModifier : undefined;
  }

  return (
    <Transition
      component={false}
      enter={{ opacity: 1, scale: 1 }}
      leave={{ opacity: 0, scale: 0.9 }}
    >
    {context.isOpen &&
      <Tag
        tabIndex="-1"
        role="menu"
        {...attrs}
        aria-hidden={!context.isOpen}
        className={classes}
        key="dropDownMenu"
      >{children}
      </Tag> }
   </Transition>
  );
};

DropdownMenu.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  className: PropTypes.string
};

DropdownMenu.defaultProps = {
  tag: 'div',
  flip: true
};

DropdownMenu.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired
};

export default DropdownMenu;
