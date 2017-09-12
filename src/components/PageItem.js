import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PageItem extends Component {

	render() {
 
    const {
      disabled,
      active,
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'page-item',
      disabled ? 'disabled' : '',
      active ? 'active' : '',
      className,
    );

		return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
		);
	}
}

PageItem.propTypes = {
  disabled: PropTypes.string,
  active: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

PageItem.defaultProps = {
  disabled: false,
  active: false,
  tag: 'li'
};

export default PageItem;