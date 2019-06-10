import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MDBCloseIcon from "./CloseIcon";

class Notification extends React.Component {
  state = {
    componentState: this.props.show ? "show" : "hide"
  };

  componentDidMount() {
    if (this.props.autohide > 0) this.hide(this.props.autohide);
  }

  hide = (time = 0) => {
    setTimeout(() => {
      this.setState({ componentState: "" }, () => {
        setTimeout(() => {
          this.setState({
            componentState: "hide"
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
      labelColor,
      title,
      titleClassName,
      text,
      closeClassName,
      ...attributes
    } = this.props;

    const classes = classNames(
      "toast",
      fade && "fade",
      this.state.componentState,
      className
    );

    const headerClasses = classNames("toast-header", titleClassName);
    const bodyClasses = classNames("toast-body", bodyClassName);
    const closeClasses = classNames("ml-2", "mb-1", closeClassName);

    return (
      <Tag {...attributes} className={classes}>
        <div className={headerClasses}>
          <svg
            className="rounded mr-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect fill={labelColor} width="100%" height="100%" />
          </svg>
          <strong className="mr-auto">{title}</strong>
          <small>{text}</small>
          <MDBCloseIcon className={closeClasses} onClick={() => this.hide()} />
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
  labelColor: PropTypes.string,
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
  tag: "div",
  labelColor: "#007aff",
  closeClassName: "text-dark"
};

export default Notification;
export { Notification as MDBNotification };
