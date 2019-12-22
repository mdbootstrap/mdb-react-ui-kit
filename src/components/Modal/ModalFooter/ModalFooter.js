import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalFooter = props => {
  const {
    className,
    children,
    center,
    start,
    end,
    around,
    between,
    ...attributes
  } = props;

  const classes = classNames('modal-footer', className, {
    'justify-content-start': start,
    'justify-content-end': end,
    'justify-content-center': center,
    'justify-content-between': between,
    'justify-content-around': around
  });

  return (
    <div data-test='modal-footer' {...attributes} className={classes}>
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ModalFooter;
export { ModalFooter as MDBModalFooter };
