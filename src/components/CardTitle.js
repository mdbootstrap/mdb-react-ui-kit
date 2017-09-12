import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardTitle extends Component {

	render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-title',
      className
    );

		return (
      <Tag {...attributes} className={classes} />
		);
	}
}

CardTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardTitle.defaultProps = {
  tag: 'h4'
};

export default CardTitle;