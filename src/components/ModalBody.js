import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ModalBody extends React.Component {

  render() {
    let closeButton;
    const {
      className,
      children,
      ...attributes } = this.props;

    const classes = classNames(
      'modal-body',
      className,
    );

    return (
      <div {...attributes} className={classes}>
        {children}
      </div>
    );
  }
}

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ModalBody;


