import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardHeader = props => {
  const { border, className, color, tag: Tag, text, transparent, ...attributes } = props;

  const classes = classNames(
    {
      'white-text': color && !text,
      [`border-${border}`]: border,
      'bg-transparent': transparent,
      [`${text}-text`]: text
    },
    'card-header',
    className,
    color
  );

  return <Tag data-test='card-header' {...attributes} className={classes} />;
};

CardHeader.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  transparent: PropTypes.bool
};

CardHeader.defaultProps = {
  tag: 'div'
};

export default CardHeader;
export { CardHeader as MDBCardHeader };
