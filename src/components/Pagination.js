import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Pagination extends Component {

	render() {
 
    const {
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'pagination',
      className,
    );

		return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
		);
	}
}

Pagination.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

Pagination.defaultProps = {
  tag: 'ul'
};

export default Pagination;