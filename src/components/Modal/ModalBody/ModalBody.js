import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalBody = props => {
  const { className, children, ...attributes } = props;

  const classes = classNames('modal-body', className);

  return (
    <div data-test='modal-body' {...attributes} className={classes}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ModalBody;
export { ModalBody as MDBModalBody };
