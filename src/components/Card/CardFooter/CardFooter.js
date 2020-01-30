import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardFooter = props => {
  const {
    className,
    tag: Tag,
    color,
    children,
    text,
    border,
    transparent,
    small,
    muted,
    ...attributes
  } = props;

  const classes = classNames(
    {
      'white-text': color && !text,
      [`border-${border}`]: border,
      'bg-transparent': transparent,
      'text-muted': muted,
      [`${text}-text`]: text
    },
    'card-footer',
    color,
    className
  );

  return (
    <Tag data-test='card-footer' {...attributes} className={classes}>
      {small ? <small> {children} </small> : children}
    </Tag>
  );
};

CardFooter.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  transparent: PropTypes.bool
};

CardFooter.defaultProps = {
  tag: 'div'
};

export default CardFooter;
export { CardFooter as MDBCardFooter };
