import React, { useState, useEffect } from "react";
import { Popper as ReactPopper, Manager, Reference } from "react-popper";
import PropTypes from "prop-types";
import classNames from "classnames";

const Popper = ({ children, clickable, domElement, modifiers, id, isVisible, onChange, placement, popover, style, tag }) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => { setVisible(isVisible) }, [isVisible]);

  useEffect(() => { onChange && onChange(visible) }, [onChange, visible]);

  useEffect(() => {
    window.addEventListener('click', handleClick);

    return (() => window.removeEventListener('click', handleClick));
  });

  function handleClick(e) {
    const element = document.elementsFromPoint(e.clientX, e.clientY).find(el => el.dataset.popper === id);
    if (element) return;
    
    setVisible(false);
  }

  const Wrapper = children[0];
  const Content = children[1];
  const Tag = tag;

  const tooltipClasses = classNames(
    "fade",
    popover ? `popover bs-popover-${placement} popover-enter-done` : `tooltip bs-tooltip-${placement}`,
    visible ? "show" : "",
  );

  const contentClasses = classNames(
    !popover && "tooltip-inner"
  );
  
  return (
    <Manager data-test="popper">
      <Reference>
        {
          ({ ref }) => (
            !domElement
              ? <Wrapper.type
                {...Wrapper.props}
                onMouseEnter={() => !clickable && setVisible(true)}
                onMouseLeave={() => !clickable && setVisible(false)}
                onTouchStart={() => !clickable && setVisible(true)}
                onTouchEnd={() => !clickable && setVisible(false)}
                onMouseDown={() => clickable && setVisible(!visible)}
                innerRef={ref}
                data-popper={id}
              />
              : <Wrapper.type
                {...Wrapper.props}
                onMouseEnter={() => !clickable && setVisible(true)}
                onMouseLeave={() => !clickable && setVisible(false)}
                onTouchStart={() => !clickable && setVisible(true)}
                onTouchEnd={() => !clickable && setVisible(false)}
                onMouseDown={() => clickable && setVisible(!visible)}
                ref={ref}
                data-popper={id}
              />
          )
        }
      </Reference>
      {
        visible && Content.props.children &&
        <Tag style={style}>
          <ReactPopper
            modifiers={modifiers}
            eventsEnabled={true}
            positionFixed={false}
            placement={placement}
          >
            {
              ({ placement, ref, style, arrowProps }) => (
                <Tag ref={ref} style={style} data-placement={placement} className={tooltipClasses} data-popper={id}>
                  <Content.type {...Content.props} className={contentClasses}>
                    {Content.props.children}
                  </Content.type>
                  <span ref={arrowProps.ref} style={arrowProps.style} data-placement={placement} className="arrow" />
                </Tag>
              )
            }
          </ReactPopper>
        </Tag>
      }
    </Manager>
  );
}

Popper.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  modifiers: PropTypes.object,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  placement: PropTypes.string,
  popover: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string,
};

Popper.defaultProps = {
  clickable: false,
  domElement: false,
  id: 'popper',
  isVisible: false,
  placement: 'top',
  popover: false,
  style: { display: 'inline-block' },
  tag: 'div'
}

export default Popper;
export { Popper as MDBPopper };
export { Popper as MDBTooltip };
export { Popper as Tooltip };
export { Popper as MDBPopover };
export { Popper as Popover };
