import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Card extends Component {

	render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card',
      className
    );

		return (
      <Tag {...attributes} className={classes} />
		);
	}
}

Card.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

Card.defaultProps = {
  tag: 'div'
};

export default Card;