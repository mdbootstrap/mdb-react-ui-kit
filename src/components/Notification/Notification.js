import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MDBCloseIcon from '../CloseIcon';
import MDBIcon from '../Fa';

class Notification extends React.Component {
  state = {
    componentState: this.props.show ? 'show' : 'hide'
  };

  componentDidMount() {
    if (this.props.autohide > 0) this.hide(this.props.autohide);
  }

  hide = (time = 0) => {
    if (typeof time === 'object') time = 0;

    setTimeout(() => {
      this.setState({ componentState: '' }, () => {
        setTimeout(() => {
          this.setState({
            componentState: 'hide'
          });
        }, 150);
      });
    }, time);
  };

  render() {
    const {
      tag: Tag,
      className,
      show,
      fade,
      message,
      bodyClassName,
      icon,
      iconClassName,
      title,
      titleClassName,
      text,
      closeClassName,
      ...attributes
    } = this.props;

    const classes = classNames(
      'toast',
      fade && 'fade',
      this.state.componentState,
      className
    );

    const headerClasses = classNames('toast-header', titleClassName);
    const iconClassNames = classNames('mr-2', iconClassName);
    const bodyClasses = classNames('toast-body', bodyClassName);
    const closeClasses = classNames('ml-2', 'mb-1', closeClassName);

    return (
      <Tag data-test='notification' {...attributes} className={classes}>
        <div className={headerClasses}>
          <MDBIcon icon={icon} className={iconClassNames} size='lg' />
          <strong className='mr-auto'>{title}</strong>
          <small>{text}</small>
          <MDBCloseIcon className={closeClasses} onClick={this.hide} />
        </div>
        <div className={bodyClasses}>{message}</div>
      </Tag>
    );
  }
}

Notification.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  show: PropTypes.bool,
  fade: PropTypes.bool,
  autohide: PropTypes.number,
  iconClassName: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  titleColor: PropTypes.string,
  titleClassName: PropTypes.string,
  closeClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  bodyColor: PropTypes.string,
  message: PropTypes.string
};

Notification.defaultProps = {
  icon: 'square',
  tag: 'div',
  closeClassName: 'text-dark'
};

export default Notification;
export { Notification as MDBNotification };
