import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-motion-ui-pack';
import Waves from './Waves';



class SideNav extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isThere: false,
      showOverlay: false,
      cursorPos: {}
    }
    this.updatePredicate = this.updatePredicate.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    if (!this.props.hidden) {
      this.setState({ isThere: window.innerWidth > this.props.breakWidth })
    }
  }

  componentWillReceiveProps(NextProps) {
    if (this.props.isOpenWithButton !== NextProps.isOpenWithButton) {
      this.setState({
        isThere: true,
        showOverlay: true
      })
    }
  }

  handleOverlayClick(){
    this.setState({
      isThere: false,
      showOverlay: false
    });
  }

  handleClick(e){
    // Get Cursor Position
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos: cursorPos });
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    const {
      tag: Tag,
      fixed,
      logo,
      bg,
      href,
      children,
      className,
      breakWidth,
      hidden,
      right,
      isOpenWithButton,
      key,
      ...attributes
    } = this.props;

    const classes = classNames(
      'side-nav',
      fixed && 'fixed',
      right && 'right-aligned',
      className
    );

    let isThere = this.state.isThere;
    let showOverlay = this.state.showOverlay;
    const overlay = <div id="sidenav-overlay" onClick={this.handleOverlayClick} key="overlay"></div>
    const translateX = right ? 300 : -300;

    const sidenav = (
      <Tag {...attributes} className={classes} style={{backgroundImage: `url(${bg}`}} key="{key}">
        <ul className="custom-scrollbar list-unstyled">
          {logo &&
            <li>
              <div className="logo-wrapper">
                <a href={href}
                className="Ripple-parent" onClick={this.onClick}
                onMouseDown={ this.handleClick.bind(this) }
                onTouchStart={ this.handleClick.bind(this) }>
                  <img src={logo} className="img-fluid flex-center d-block"/>
                  <Waves cursorPos={ this.state.cursorPos } />
                </a>
              </div>
            </li>
          }
          {children}
        </ul>
      </Tag>
    );


    return (
      <div>
        <Transition
        component={false}
        enter={{ opacity: 1, translateX: 0 }}
        leave={{ opacity: 0.2, translateX: translateX }}
        >
          {isThere && sidenav}
        </Transition>
        {showOverlay && overlay}
      </div>
    );
  }
}

SideNav.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  breakWidth: PropTypes.number,
  isOpenWithButton: PropTypes.bool,
  bg: PropTypes.string
};

SideNav.defaultProps = {
  tag: 'div',
  href: '#',
  breakWidth: 1400
};

export default SideNav;


