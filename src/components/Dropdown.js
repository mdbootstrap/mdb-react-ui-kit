import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Manager } from 'react-popper';
import classNames from 'classnames';
import { omit, keyCodes } from './utils';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
  }

  getChildContext() {
    return {
      isOpen: this.state.isOpen,
      dropup: this.props.dropup,
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
    if(this.state.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  getContainer() {
    return ReactDOM.findDOMNode(this);
  }

  addEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }

  removeEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }

  handleDocumentClick(e) {
    if (e && (e.which === 3 || (e.type === 'keyup' && e.which !== keyCodes.tab))) return;
    const container = this.getContainer();

    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  }

  handleKeyDown(e) {
    if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 ||
      (/button/i.test(e.target.tagName) && e.which === keyCodes.space) ||
      /input|textarea/i.test(e.target.tagName)) {
      return;
    }

    e.preventDefault();
    if (this.props.disabled) return;

    const container = this.getContainer();

    if (e.which === keyCodes.space && this.state.isOpen && container !== e.target) {
      e.target.click();
    }

    if (e.which === keyCodes.esc || !this.state.isOpen) {
      this.toggle(e);
      container.querySelector('[aria-expanded]').focus();
      return;
    }

    const menuClass = 'dropdown-menu';
    const itemClass = 'dropdown-item';
    const disabledClass = 'disabled';

    const items = container.querySelectorAll(`.${menuClass} .${itemClass}:not(.${disabledClass})`);

    if (!items.length) return;

    let index = -1;
    for (let i = 0; i < items.length; i += 1) {
      if (items[i] === e.target) {
        index = i;
        break;
      }
    }

    if (e.which === keyCodes.up && index > 0) {
      index -= 1;
    }

    if (e.which === keyCodes.down && index < items.length - 1) {
      index += 1;
    }

    if (index < 0) {
      index = 0;
    }

    items[index].focus();
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {
      className,
      dropup,
      group,
      size,
      ...attrs
    } = omit(this.props, ['toggle', 'disabled']);

    const classes = classNames(
      {
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group,
        show: this.state.isOpen,
        dropup: dropup
      },
      className
    );
    return <Manager {...attrs} className={classes} onKeyDown={this.handleKeyDown} />;
  }
}

Dropdown.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};
Dropdown.defaultProps = {
  dropup: false,
  tag: 'div'
};
Dropdown.childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired
};

export default Dropdown;
export { Dropdown as MDBDropdown };
