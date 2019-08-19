import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardText = props => {
  const {
    className,
    tag: Tag,
    children: textNode,
    muted,
    small,
    ...attributes
  } = props;

  const classes = classNames('card-text', muted && 'text-muted', className);

  const children = small ? <small>{textNode}</small> : textNode;

  return (
    <Tag data-test="card-text" {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

CardText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool
};

CardText.defaultProps = {
  tag: 'p',
};

export default CardText;
export { CardText as MDBCardText };
