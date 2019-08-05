import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Media = props => {
  const {
    body,
    bottom,
    className,
    heading,
    left,
    list,
    middle,
    object,
    right,
    round,
    thumbnail,
    figure,
    figImg,
    figCap,
    figCapRight,
    figCapLeft,
    tag,
    top,
    ...attributes
  } = props;

  let defaultTag;
  if (heading) {
    defaultTag = "h4";
  } else if (left || right) {
    defaultTag = "a";
  } else if (object || figImg) {
    defaultTag = "img";
  } else if (list) {
    defaultTag = "ul";
  } else if (figure) {
    defaultTag = "figure";
  } else if (figCap || figCapRight || figCapLeft) {
    defaultTag = "figcaption";
  } else {
    defaultTag = "div";
  }
  const Tag = tag || defaultTag;

  const classes = classNames(
    {
      "media-body": body,
      "mt-0": heading,
      "media-left": left,
      "media-right": right,
      "align-self-start": top,
      "align-self-center": middle,
      "align-self-end": bottom,
      "media-object": object,
      "img-thumbnail": thumbnail,
      "media-list": list,
      figure,
      "figure-img": figImg,
      "figure-caption text-center": figCap,
      "figure-caption text-right": figCapRight,
      "figure-caption text-left": figCapLeft,
      "rounded-circle z-depth-1-half": round
    },
    !body &&
      !heading &&
      !left &&
      !right &&
      !top &&
      !bottom &&
      !middle &&
      !object &&
      !list &&
      !figCap &&
      !figCapRight &&
      !figCapRight &&
      !figImg &&
      !figure
      ? "media"
      : false,
    className
  );
  return <Tag {...attributes} className={classes} />;
};

Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  figure: PropTypes.bool,
  figImg: PropTypes.bool,
  figCap: PropTypes.bool,
  figCapRight: PropTypes.bool,
  figCapLeft: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  thumbnail: PropTypes.bool,
  round: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
};

export default Media;
export { Media as MDBMedia };
