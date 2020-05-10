import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardBody = props => {
  const { className, tag: Tag, cascade, ...attributes } = props;

  const classes = classNames('card-body', cascade && 'card-body-cascade', className);

  return <Tag data-test='card-body' {...attributes} className={classes} />;
};

CardBody.propTypes = {
  cascade: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardBody.defaultProps = {
  tag: 'div'
};

export default CardBody;
export { CardBody as MDBCardBody };
