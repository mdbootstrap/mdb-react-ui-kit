import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PageLink extends Component {

  render() {
 
    const {
      children,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'page-link',
      className,
    );

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

PageLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
};

PageLink.defaultProps = {
  tag: 'a'
};

export default PageLink;