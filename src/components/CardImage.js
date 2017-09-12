import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardImage extends Component {

	render() {
 
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;

		return (
      <Tag {...attributes} className={className} />
		);
	}
}

CardImage.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};

CardImage.defaultProps = {
  tag: 'img'
};

export default CardImage;