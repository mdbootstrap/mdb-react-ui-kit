import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CarouselInner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      childrenCount: React.Children.count(this.props.children)
    };
  }

  render() {

    let {
      active,
      children,
      childrenCount,
      className,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = classNames(
      'carouse-inner',
      active ? 'active' : '',
      className
    );

    childrenCount = React.Children.count(this.props.children);

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

CarouselInner.propTypes = {
  childrenCount: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node
};

CarouselInner.defaultProps = {
  tag: 'div'
};

CarouselInner.contextTypes = {
  childrenCount: PropTypes.any
};

export default CarouselInner;