import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardText extends Component {

	render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'card-text',
      className
    );

		return (
      <Tag {...attributes} className={classes} />
		);
	}
}

CardText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardText.defaultProps = {
  tag: 'p'
};

export default CardText;