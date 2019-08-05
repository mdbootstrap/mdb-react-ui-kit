import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Waves from "../../Waves";
import Mask from "../../Mask";
import View from "../../View";

const CardImage = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  const { className, overlay, top, waves, hover, cascade, tag, zoom, ...attributes } = props;

  const classes = classNames(top && "card-img-top", className);

  const Tag = tag;

  const innerContent = (
    <Tag {...attributes} className={classes}>
      {props.children}
    </Tag>
  );

  if (props.src) {
    return (
      <View zoom={zoom} hover={hover} cascade={cascade}>
        <div className="Ripple-parent" onMouseDown={handleClick} style={{ touchAction: "unset" }}>
          {innerContent}
          <Mask overlay={overlay} />
          {waves && <Waves cursorPos={cursorPos} />}
        </div>
      </View>
    );
  } else {
    return <div>{innerContent}</div>;
  }
};

CardImage.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  zoom: PropTypes.bool,
  waves: PropTypes.bool,
  className: PropTypes.string,
  cascade: PropTypes.bool,
  hover: PropTypes.bool,
  overlay: PropTypes.string,
  top: PropTypes.bool,
  src: PropTypes.string,
  children: PropTypes.node
};

CardImage.defaultProps = {
  tag: "img",
  overlay: "white-slight",
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

export default CardImage;
export { CardImage as MDBCardImage };
