import classNames from 'classnames';
import Popper from 'popper.js';
import PropTypes from 'prop-types';
import React from 'react';
import './Popper.css';
class Popover extends React.Component {
  state = {
    popperJS: null,
    visible: this.props.isVisible,
    showPopper: this.props.isVisible
  };

  popoverWrapperRef = React.createRef();
  referenceElm = React.createRef();

  componentDidUpdate(prevProps, prevState) {
    const { showPopper } = this.state;
    const { isVisible, onChange } = this.props;
    this.setPopperJS();
    if (prevProps.isVisible !== isVisible && isVisible !== showPopper && showPopper !== prevProps.showPopper) {
      this.setState({ showPopper: isVisible });
    }
    if (onChange && showPopper !== prevState.showPopper) {
      onChange(showPopper);
    }
    if (showPopper && prevState.showPopper !== showPopper) {
      this.createPopper();
    }
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.setPopperJS(), 3);
    document.addEventListener('click', this.handleClick);
  }

  setPopperJS = () => {
    const { showPopper, popperJS } = this.state;
    if (showPopper) {
      popperJS ? popperJS.scheduleUpdate() : this.createPopper();
    }
  };

  createPopper = () => {
    const { placement, modifiers } = this.props;
    const { popperJS } = this.state;
    if (this.referenceElm && this.popoverWrapperRef) {
      this.setState({
        popperJS: new Popper(
          this.referenceElm,
          this.popoverWrapperRef,
          {
            placement,
            modifiers
          },
          () =>
            setTimeout(() => {
              popperJS.scheduleUpdate();
            }, 10)
        )
      });
    }
  };

  doToggle = toggler => {
    this.setState(
      {
        showPopper: toggler && true
      },
      () => {
        const { showPopper, visible } = this.state;
        if (showPopper) {
          this.setState(
            {
              visible: typeof toggler !== 'undefined' ? toggler : !visible
            },
            () => {
              this.createPopper();
              this.state.popperJS.scheduleUpdate();
            }
          );
        }
      }
    );
  };

  handleClick = e => {
    const { target } = e;
    const { showPopper } = this.state;

    if (this.popoverWrapperRef && showPopper) {
      if (
        this.popoverWrapperRef.contains(target) ||
        this.referenceElm.contains(target) ||
        target === this.referenceElm
      ) {
        return;
      }

      this.doToggle(false);
    }
  };

  render() {
    const {
      children,
      className,
      clickable,
      domElement,
      email,
      id,
      isVisible,
      material,
      modifiers,
      placement,
      popover,
      sm,
      style,
      onChange,
      tag: Tag,
      ...attributes
    } = this.props;

    const { visible, showPopper } = this.state;
    const Popper = children[1];
    const Wrapper = children[0];
    const classes = classNames(
      visible && 'show',
      popover ? 'popover' : !material && !email && 'tooltip px-2',
      className
    );

    const popperClasses = classNames(
      (material || email) && 'tooltip-inner',
      material && (sm ? 'md-inner' : 'md-inner-main'),
      email && (sm ? 'md-inner' : 'md-inner-email')
    );

    return (
      <>
        {!domElement ? (
          <Wrapper.type
            {...Wrapper.props}
            onMouseEnter={() => !clickable && this.doToggle(true)}
            onMouseLeave={() => !clickable && !popover && setTimeout(() => this.doToggle(false), 0)}
            onTouchStart={() => !clickable && this.doToggle(true)}
            onTouchEnd={() => !clickable && !popover && this.doToggle(false)}
            onMouseDown={() => {
              clickable && this.doToggle(!showPopper);
              setTimeout(() => this.setPopperJS(), 100);
            }}
            onMouseUp={() => setTimeout(() => this.setPopperJS(), 0)}
            innerRef={ref => (this.referenceElm = ref)}
            data-popper={id}
          />
        ) : (
          <Wrapper.type
            {...Wrapper.props}
            onMouseEnter={() => !clickable && this.doToggle(true)}
            onMouseLeave={() => !clickable && !popover && setTimeout(() => this.doToggle(false), 0)}
            onTouchStart={() => !clickable && this.doToggle(true)}
            onTouchEnd={() => !clickable && !popover && this.doToggle(false)}
            onMouseDown={() => clickable && this.doToggle(!showPopper)}
            onMouseUp={() => setTimeout(() => this.setPopperJS(), 0)}
            ref={ref => (this.referenceElm = ref)}
            data-popper={id}
          />
        )}
        {showPopper && (
          <Tag ref={ref => (this.popoverWrapperRef = ref)} className={classes} data-popper={id} {...attributes}>
            <Popper.type className={classNames(popperClasses, Popper.props.className)}>
              {Popper.props.children}
            </Popper.type>
            <span x-arrow='' className={classNames('popover_arrow')}></span>
          </Tag>
        )}
      </>
    );
  }
}
Popover.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  email: PropTypes.bool,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  material: PropTypes.bool,
  modifiers: PropTypes.object,
  placement: PropTypes.string,
  popover: PropTypes.bool,
  sm: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string
};
Popover.defaultProps = {
  clickable: false,
  domElement: false,
  id: 'popper',
  isVisible: false,
  placement: 'top',
  popover: false,
  style: { display: 'inline-block' },
  tag: 'div'
};
export default Popover;
export { Popover as MDBPopper };
export { Popover as MDBTooltip };
export { Popover as Tooltip };
export { Popover as MDBPopover };
