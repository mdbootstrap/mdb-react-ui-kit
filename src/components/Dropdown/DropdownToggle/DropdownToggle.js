import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Reference } from 'react-popper';
import Button from '../../Button';
import DropdownContext from '../DropdownContext';

class DropdownToggle extends Component {
  onClick = (e, callback) => {
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

    callback && callback(e);
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

    const children = props.children || <span className='sr-only'>{ariaLabel}</span>;

    let Tag = tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
    }

    return (
      <DropdownContext.Consumer>
        {({ isOpen, toggle }) => {
          return (
            <Reference data-test='dropdown-toggle'>
              {({ ref }) =>
                tag || nav ? (
                  <Tag
                    {...props}
                    className={classes}
                    onClick={e => this.onClick(e, toggle)}
                    aria-expanded={isOpen}
                    ref={ref}
                  >
                    {children}
                  </Tag>
                ) : (
                  <Tag
                    {...props}
                    className={classes}
                    onClick={e => this.onClick(e, toggle)}
                    aria-expanded={isOpen}
                    innerRef={ref}
                  >
                    {children}
                  </Tag>
                )
              }
            </Reference>
          );
        }}
      </DropdownContext.Consumer>
    );
  }
}

DropdownToggle.propTypes = {
  'aria-haspopup': PropTypes.bool,
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  nav: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

DropdownToggle.defaultProps = {
  'aria-haspopup': true,
  color: 'secondary'
};

export default DropdownToggle;
export { DropdownToggle as MDBDropdownToggle };
