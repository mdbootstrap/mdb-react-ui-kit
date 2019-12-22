import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Row = props => {
  const {
    around,
    between,
    bottom,
    center,
    className,
    end,
    middle,
    start,
    tag: Tag,
    top,
    ...attributes
  } = props;

  const classes = classNames(
    'row',
    end && 'justify-content-end',
    start && 'justify-content-start',
    center && 'justify-content-center',
    between && 'justify-content-between',
    around && 'justify-content-around',
    top && 'align-self-start',
    middle && 'align-self-center',
    bottom && 'align-self-end',
    className
  );

  return <Tag data-test='row' {...attributes} className={classes} />;
};

Row.propTypes = {
  around: PropTypes.bool,
  between: PropTypes.bool,
  bottom: PropTypes.bool,
  center: PropTypes.bool,
  className: PropTypes.string,
  end: PropTypes.bool,
  middle: PropTypes.bool,
  start: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
};

Row.defaultProps = {
  tag: 'div'
};

export default Row;
export { Row as MDBRow };
