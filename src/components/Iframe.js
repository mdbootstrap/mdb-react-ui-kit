import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { returnAttributes } from "./utils";

class Iframe extends Component {
  state = {
    width: "",
    height: "",
    ratio: ""
  };

  componentDidMount = () => {
    let width = this.props.width;
    let height = this.props.height;
    let ratio = 9 / 16;

    if (this.props.ratio) {
      const newRatio =
        this.props.ratio.split("by")[0] / this.props.ratio.split("by")[1];
      if (typeof ratio === "number") ratio = newRatio;
    }

    if (this.props.width && this.props.height) {
      return;
    } else if (this.props.width) {
      height = this.props.width * ratio;
    } else if (this.props.height) {
      width = this.props.height * (1 / ratio);
    }

    this.setState({
      ...this.state,
      width: width,
      height: height,
      ratio: ratio
    });
  };

  render() {
    const {
      allowFullScreen,
      className,
      id,
      name,
      onMouseOver,
      onMouseOut,
      onLoad,
      sandbox,
      src,
      style,
      title,
      ratio,
      height,
      width
    } = this.props;

    const classes = classNames("embed-responsive-item", className);
    const wrapperClasses = classNames(
      !(height || width) && "embed-responsive",
      ratio ? `embed-responsive-${ratio}` : `embed-responsive-16by9`,
      className
    );

    let iframeAttributes = {
      src,
      id: id || false,
      frameBorder: "0",
      target: "_parent",
      allowFullScreen: allowFullScreen || true,
      height: this.state.height || "100%",
      name: name || undefined,
      width: this.state.width || "100%",
      onLoad: onLoad || undefined,
      onMouseOver: onMouseOver || undefined,
      onMouseOut: onMouseOut || undefined,
      sandbox: sandbox || undefined,
      style: style || undefined
    };

    iframeAttributes = returnAttributes(iframeAttributes);

    return (
      <div className={wrapperClasses}>
        <iframe title={title || ""} className={classes} {...iframeAttributes} />
      </div>
    );
  }
}

Iframe.propTypes = {
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  onLoad: PropTypes.func,
  ratio: PropTypes.string,
  sandbox: PropTypes.string,
  src: PropTypes.string.isRequired,
  styles: PropTypes.object,
  width: PropTypes.number,
  title: PropTypes.string
};

export default Iframe;
export { Iframe as MDBIframe };
