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
    const { autohide } = this.props;
    if (autohide > 0) {this.hide(autohide);}
  }

  hide = (time = 0) => {
    if (typeof time === 'object') {time = 0;}

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

    const { componentState } = this.state;

    const classes = classNames(
      'toast',
      fade && 'fade',
      componentState,
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
  autohide: PropTypes.number,
  bodyClassName: PropTypes.string,
  bodyColor: PropTypes.string,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  fade: PropTypes.bool,
  iconClassName: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  titleColor: PropTypes.string
};

Notification.defaultProps = {
  icon: 'square',
  tag: 'div',
  closeClassName: 'text-dark'
};

export default Notification;
export { Notification as MDBNotification };
