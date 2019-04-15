import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "./Waves";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
  }

  handleClick(e) {
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  render() {
    const {
      cascade,
      children,
      className,
      hover,
      rounded,
      src,
      tag: Tag,
      waves,
      zoom,
      fixed,
      ...attributes
    } = this.props;

    const classes = classNames(
      "view",
      rounded && "rounded",
      zoom && "zoom",
      hover && "overlay",
      cascade && "view-cascade",
      waves ? "Ripple-parent" : false,
      className
    );

    const viewStyle = src 
      ? {
      backgroundImage: `url("${src}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        backgroundAttachment: fixed ? "fixed" : null
      }
      : {};

    return (
      <Tag
        {...attributes}
        className={classes}
        onMouseDown={this.handleClick.bind(this)}
        onTouchStart={this.handleClick.bind(this)}
        style={viewStyle}
      >
        {children}
        {waves && <Waves cursorPos={this.state.cursorPos} />}
      </Tag>
    );
  }
}

View.defaultProps = {
  cascade: false,
  className: "",
  hover: false,
  rounded: false,
  src: "",
  tag: "div",
  waves: false,
  zoom: false
};

View.propTypes = {
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string,
  tag: PropTypes.string,
  waves: PropTypes.bool,
  zoom: PropTypes.bool,
};

export default View;
export { View as MDBView };
