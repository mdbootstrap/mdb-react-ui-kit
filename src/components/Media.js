import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Media extends React.Component {

  render() {
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
    } = this.props;

    let defaultTag;
    if (heading) {
      defaultTag = 'h4';
    } else if (left || right) {
      defaultTag = 'a';
    } else if (object || figImg) {
      defaultTag = 'img';
    } else if (list) {
      defaultTag = 'ul';
    } else if (figure) {
      defaultTag = 'figure';
    } else if (figCap || figCapRight || figCapLeft) {
      defaultTag = 'figcaption';
    } else {
      defaultTag = 'div';
    }
    const Tag = tag || defaultTag;

    const classes = classNames(
      body ? 'media-body': false,
      heading ? 'mt-0': false,
      left ? 'media-left': false,
      right ?'media-right': false,
      top ?'align-self-start': false,
      middle ?'align-self-center': false,
      bottom ?'align-self-end': false,
      object ?'media-object': false,
      thumbnail ? 'img-thumbnail': false,
      list ? 'media-list': false,
      figure ? 'figure': false,
      figImg ? 'figure-img' : false,
      figCap ? 'figure-caption text-center': false,
      figCapRight ? 'figure-caption text-right': false,
      figCapLeft ? 'figure-caption text-left': false,
      round ? 'rounded-circle z-depth-1-half': false,
      !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight&& !figCapRight && !figImg && !figure ? 'media' : false,
      className
    );
    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

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
