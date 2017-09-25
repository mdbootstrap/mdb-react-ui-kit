import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Row extends Component {

	render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'row',
      className
    );

		return (
      <Tag {...attributes} className={classes} />
		);
	}
}

Row.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

Row.defaultProps = {
  tag: 'div',
};

export default Row;