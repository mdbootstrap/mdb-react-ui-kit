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
      tag,
      top,
      ...attributes
    } = this.props;

    let defaultTag;
    if (heading) {
      defaultTag = 'h4';
    } else if (left || right) {
      defaultTag = 'a';
    } else if (object) {
      defaultTag = 'img';
    } else if (list) {
      defaultTag = 'ul';
    } else {
      defaultTag = 'div';
    }
    const Tag = tag || defaultTag;

    const classes = classNames(
      body ? 'media-body': false,
      heading ? 'media-heading': false,
      left ? 'media-left': false,
      right ?'media-right': false,
      top ?'media-top': false,
      bottom ?'media-bottom': false,
      middle ?'media-middle': false,
      object ?'media-object': false,
      list ? 'media-list': false,
      !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list ? 'media' : false,
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
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
};

export default Media;
