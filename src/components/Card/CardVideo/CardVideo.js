import React from 'react';
import { MDBIframe } from 'mdbreact';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardVideo = props => {
  const { children, className, src, ...attributes } = props;

  const classes = classNames(className);

  return (
    <MDBIframe
      data-test='card-video'
      {...attributes}
      src={src}
      className={classes}
    >
      {children}
    </MDBIframe>
  );
};

CardVideo.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default CardVideo;
export { CardVideo as MDBCardVideo };
