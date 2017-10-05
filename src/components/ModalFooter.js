import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ModalFooter extends React.Component {

  render() {
    let closeButton;
    const {
      className,
      children,
      ...attributes } = this.props;

    const classes = classNames(
      'modal-footer',
      className,
    );

    return (
      <div {...attributes} className={classes}>
        {children}
      </div>
    );
  }
}

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default ModalFooter;


