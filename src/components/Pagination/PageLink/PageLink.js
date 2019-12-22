import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PageLink = props => {
  const { children, className, tag: Tag, ...attributes } = props;

  const classes = classNames('page-link', className);

  return (
    <Tag data-test='page-link' {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

PageLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

PageLink.defaultProps = {
  tag: 'a'
};

export default PageLink;
export { PageLink as MDBPageNav };
