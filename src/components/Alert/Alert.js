import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const Alert = props => {
  const [isOpen, setIsOpen] = useState(true);

  const closeAlert = () => {
    setIsOpen(false);
  };

  const handleOnExit = node => {
    node.classList.add('fade');
    return props.onClose && props.onClose();
  };

  const handleOnExited = () => {
    return props.onClosed && props.onClosed();
  };

  const { className, tag: Tag, color, children, dismiss } = props;

  const alertClasses = classNames('alert', color && `alert-${color}`, className);

  let alertComponent;

  if (dismiss) {
    alertComponent = (
      <Transition
        in={isOpen}
        timeout={150}
        unmountOnExit
        onExit={node => handleOnExit(node)}
        onExited={node => handleOnExited(node)}
      >
        <Tag data-test='alert' className={alertClasses} role='alert'>
          {children}
          <button onClick={closeAlert} type='button' className='close' data-dismiss='alert' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </Tag>
      </Transition>
    );
  } else {
    alertComponent = (
      <Tag data-test='alert' className={alertClasses} role='alert'>
        {children}
      </Tag>
    );
  }

  return alertComponent;
};

Alert.defaultProps = {
  color: 'primary',
  tag: 'div'
};

Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  tag: PropTypes.string
};

export default Alert;
export { Alert as MDBAlert };
