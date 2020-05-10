import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardText = props => {
  const { children: textNode, className, muted, small, tag: Tag, ...attributes } = props;

  const classes = classNames('card-text', muted && 'text-muted', className);

  const children = small ? <small>{textNode}</small> : textNode;

  return (
    <Tag data-test='card-text' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

CardText.propTypes = {
  className: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardText.defaultProps = {
  tag: 'p'
};

export default CardText;
export { CardText as MDBCardText };
