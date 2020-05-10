import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Manager } from 'react-popper';
import classNames from 'classnames';
import { omit, keyCodes } from '../utils';

class Dropdown extends Component {
  state = {
    isOpen: false
  };

  getChildContext() {
    const { isOpen } = this.state;
    const { dropup, dropright, dropleft } = this.props;
    return {
      isOpen: isOpen,
      dropup: dropup,
      dropright: dropright,
      dropleft: dropleft,
      toggle: this.toggle
    };
  }

  componentDidMount() {
    this.handleEventsBinding();
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  componentDidUpdate() {
    this.handleEventsBinding();
  }

  handleEventsBinding() {
    const { isOpen } = this.state;
    isOpen ? this.addEvents() : this.removeEvents();
  }

  getContainer = () => {
    return ReactDOM.findDOMNode(this);
  };

  addEvents = () => {
    ['click', 'touchstart', 'keyup'].forEach(event => document.addEventListener(event, this.handleDocumentClick, true));
  };

  removeEvents = () => {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  };

  handleDocumentClick = e => {
    const { which: keyCode, type, target } = e;
    const { tab } = keyCodes;

    const MOUSE_RIGHT_CLICK = keyCode === 3;
    const TAB = keyCode === tab;
    const KEYUP = type === 'keyup';

    if (MOUSE_RIGHT_CLICK || (KEYUP && !TAB)) {
      return;
    }

    const container = this.getContainer();

    if (container.contains(target) && container !== target && (!KEYUP || TAB)) {
      return;
    }

    this.toggle();
  };

  handleFocus = (e, items) => {
    const { up, down } = keyCodes;
    const { which: keyCode, target } = e;

    const UP = keyCode === up;
    const DOWN = keyCode === down;

    let index = [...items].findIndex(item => item === target);

    if (UP && index > 0) {
      index -= 1;
    }

    if (DOWN && index < items.length - 1) {
      index += 1;
    }

    if (index < 0) {
      index = 0;
    }

    items[index].focus();
  };

  handleKeyDown = e => {
    const { isOpen } = this.state;
    const { disabled } = this.props;
    const { which: keyCode, target } = e;
    const { esc, up, down, space } = keyCodes;

    const SPACE = keyCode === space;
    const ESC = keyCode === esc;

    if (
      ![esc, up, down, space].includes(keyCode) ||
      (/button/i.test(target.tagName) && SPACE) ||
      /input|textarea/i.test(target.tagName)
    ) {
      return;
    }

    e.preventDefault();

    if (disabled) {
      return;
    }

    const container = this.getContainer();

    if (SPACE && isOpen && container !== target) {
      target.click();
    }

    if (ESC || !isOpen) {
      this.toggle();
      const btn = container.children[0];
      btn.focus();

      return;
    }

    const items = container.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled)');

    items.length && this.handleFocus(e, items);
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { className, children, dropup, group, size, dropright, dropleft } = omit(this.props, ['toggle', 'disabled']);

    const { isOpen } = this.state;

    const classes = classNames(
      {
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group,
        show: isOpen,
        dropup,
        dropright,
        dropleft
      },
      className
    );
    return (
      <Manager>
        <div data-test='dropdown' className={classes} onKeyDown={this.handleKeyDown}>
          {children}
        </div>
      </Manager>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  dropleft: PropTypes.bool,
  dropright: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  toggle: PropTypes.func
};
Dropdown.defaultProps = {
  dropleft: false,
  dropright: false,
  dropup: false,
  tag: 'div'
};
Dropdown.childContextTypes = {
  dropleft: PropTypes.bool.isRequired,
  dropright: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Dropdown;
export { Dropdown as MDBDropdown };
