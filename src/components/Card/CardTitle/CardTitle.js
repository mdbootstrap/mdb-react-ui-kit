import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardTitle = props => {
  const { className, sub, tag: Tag, ...attributes } = props;

  const classes = classNames(sub ? 'card-subtitle' : 'card-title', className);

  return <Tag data-test='card-title' {...attributes} className={classes} />;
};

CardTitle.propTypes = {
  className: PropTypes.string,
  sub: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardTitle.defaultProps = {
  tag: 'h4',
  sub: false
};

export default CardTitle;
export { CardTitle as MDBCardTitle };
