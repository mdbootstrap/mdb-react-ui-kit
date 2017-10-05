import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const scrollingNavbarOffset = 50;

const getExpandClass = (expand) => {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return `navbar-expand-${expand}`;
};

class Navbar extends Component {

  constructor(props, refs) {
    super(props, refs);
    this.state = {isCollapsed: false};
    this.refs = {};
  }

  handleScroll() {
    if(window.pageYOffset > scrollingNavbarOffset) {
      this.setState({isCollapsed: true});
    } else {
      this.setState({isCollapsed: false});
    }
  }

  componentDidMount() {
    if(this.props.scrolling) {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  componentWillUnmount() {
    if(this.props.scrolling) {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
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
      tag: Tag,
      ...attributes
    } = this.props;

    let classes = classNames(
      'navbar',
      light ? 'navbar-light' : '',
      dark ? 'navbar-dark' : '',
      sticky ? 'sticky-' + sticky : '',
      fixed ? 'fixed-' + fixed : '',
      getExpandClass(expand),
      scrolling ? 'scrolling-navbar' : '',
      this.state.isCollapsed ? 'top-nav-collapse' : '',
      color ? color : '',
      className
    );

    return (
      <Tag {...attributes} className={classes} ref="navbar" />
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  scrolling: PropTypes.bool,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

Navbar.defaultProps = {
  tag: 'nav',
  expand: false,
  scrolling: false
};

export default Navbar;