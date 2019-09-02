import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Reference } from 'react-popper';
import Button from '../../Button';

class DropdownToggle extends React.Component {
  onClick = e => {
    const { disabled, nav, tag, onClick } = this.props;

    if (disabled) {
      e.preventDefault();
      return;
    }

    if (nav && !tag) {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }

    this.context.toggle(e);
  };

  render() {
    const { className, color, caret, nav, tag, ...props } = this.props;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';

    const classes = classNames(
      {
        'dropdown-toggle': caret,
        'nav-link': nav
      },
      className
    );

    const children = props.children || (
      <span className='sr-only'>{ariaLabel}</span>
    );

    let Tag = tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
    }

    return (
      <Reference data-test='dropdown-toggle'>
        {({ ref }) =>
          tag || nav ? (
            <Tag
              {...props}
              className={classes}
              onClick={this.onClick}
              aria-expanded={this.context.isOpen}
              ref={ref}
            >
              {children}
            </Tag>
          ) : (
            <Tag
              {...props}
              className={classes}
              onClick={this.onClick}
              aria-expanded={this.context.isOpen}
              innerRef={ref}
            >
              {children}
            </Tag>
          )
        }
      </Reference>
    );
  }
}

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'aria-haspopup': PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool
};

DropdownToggle.defaultProps = {
  'aria-haspopup': true,
  color: 'secondary'
};

DropdownToggle.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default DropdownToggle;
export { DropdownToggle as MDBDropdownToggle };
