import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ModalHeader extends React.Component {

  render() {
    let closeButton;
    const {
      className,
      children,
      toggle,
      tag: Tag,
      closeAriaLabel,
      ...attributes } = this.props;

    const classes = classNames(
      'modal-header',
      className,
    );

    if (toggle) {
      closeButton = (
        <button type="button" onClick={toggle} className="close" aria-label={closeAriaLabel}>
          <span aria-hidden="true">{String.fromCharCode(215)}</span>
        </button>
      );
    }

    return (
      <div {...attributes} className={classes}>
        <Tag className={'modal-title'}>
          {children}
        </Tag>
        {closeButton}
      </div>
    );
  }
}

ModalHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string
};

ModalHeader.defaultProps = {
  tag: 'h4',
  closeAriaLabel: 'Close'
};

export default ModalHeader;


