import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getExpandClass = expand => {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return `navbar-expand-${expand}`;
};

class Navbar extends Component {
  state = {
    isCollapsed: false
  };

  handleScroll = () => {
    const scrollingNavbarOffset = this.props.scrollingNavbarOffset || 50;
    if (window.pageYOffset > scrollingNavbarOffset) {
      this.setState({ isCollapsed: true });
    } else {
      this.setState({ isCollapsed: false });
    }
  };

  componentDidMount() {
    if (this.props.scrolling || this.props.scrollingNavbarOffset) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.props.scrolling || this.props.scrollingNavbarOffset) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  render() {
    const {
      expand,
      light,
      dark,
      sticky,
      fixed,
      scrolling,
      color,
      className,
      scrollingNavbarOffset,
      tag: Tag,
      double,
      transparent,
      ...attributes
    } = this.props;

    let classes = classNames(
      {
        'navbar-light': light,
        'navbar-dark': dark,
        [`sticky-${sticky}`]: sticky,
        [`fixed-${fixed}`]: fixed,
        'scrolling-navbar': scrolling || scrollingNavbarOffset,
        'double-nav': double,
        'top-nav-collapse': this.state.isCollapsed,
        [`${color}`]: color && transparent ? this.state.isCollapsed : color
      },
      'navbar',
      getExpandClass(expand),
      className
    );

    return (
      <Tag
        data-test='navbar'
        {...attributes}
        className={classes}
        role='navigation'
      />
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  double: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  scrolling: PropTypes.bool,
  scrollingNavbarOffset: PropTypes.number,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  transparent: PropTypes.bool
};

Navbar.defaultProps = {
  tag: 'nav',
  expand: false,
  scrolling: false
};

export default Navbar;
export { Navbar as MDBNavbar };
