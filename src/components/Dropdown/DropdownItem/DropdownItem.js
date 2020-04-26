import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { omit } from '../../utils';

class DropdownItem extends Component {
  onClick = e => {
    const { disabled, header, divider, onClick, toggle } = this.props;

    if (disabled || header || divider) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }

    if (toggle) {
      this.context.toggle(e);
    }
  };

  getTabIndex = () => {
    const { disabled, header, divider } = this.props;

    if (disabled || header || divider) {
      return '-1';
    }

    return '0';
  };

  render() {
    const tabIndex = this.getTabIndex();
    let { className, divider, tag: Tag, header, href, active, disabled, ...props } = omit(this.props, ['toggle']);

    const { toggle } = this.props;

    const classes = classNames(
      {
        active,
        disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      },
      className
    );

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (href) {
        Tag = 'a';
      }
    }

    const type = Tag === 'button' && (props.onClick || toggle) ? 'button' : undefined;

    return (
      <Tag
        data-test='dropdown-item'
        type={type}
        {...props}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
        href={href}
      />
    );
  }
}

DropdownItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.bool
};

DropdownItem.defaultProps = {
  tag: 'button',
  toggle: true
};

DropdownItem.contextTypes = {
  toggle: PropTypes.func
};

export default DropdownItem;
export { DropdownItem as MDBDropdownItem };
