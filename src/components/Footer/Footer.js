import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = props => {
  const { color, children, className, tag: Tag, ...attributes } = props;

  const classes = classNames('page-footer', color && color, className);

  return (
    <Tag data-test='footer' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Footer.defaultProps = {
  tag: 'footer'
};

export default Footer;
export { Footer as MDBFooter };
