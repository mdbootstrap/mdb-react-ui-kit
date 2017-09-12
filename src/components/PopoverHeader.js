import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PopoverHeader = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    'popover-header',
    className,
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

PopoverHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};
PopoverHeader.defaultProps = {
  tag: 'h3'
};

export default PopoverHeader;