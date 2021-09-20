import React, { useState } from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './types';
import MDBRipple from '../../methods/Ripple/Ripple';

const MDBBtn: React.FC<ButtonProps> = React.forwardRef<HTMLAllCollection, ButtonProps>(
  (
    {
      className,
      color,
      outline,
      children,
      rounded,
      disabled,
      floating,
      size,
      href,
      block,
      active,
      toggle,
      noRipple,
      tag: Tag,
      ...props
    },
    ref
  ) => {
    const [isActive, setActive] = useState(active ? active : false);

    let btnColor;
    const waveColor = (color && ['light', 'link'].includes(color as string)) || outline ? 'dark' : 'light';

    if (color !== 'none') {
      if (outline) {
        if (color) {
          btnColor = `btn-outline-${color}`;
        } else {
          btnColor = 'btn-outline-primary';
        }
      } else if (color) {
        btnColor = `btn-${color}`;
      } else {
        btnColor = 'btn-primary';
      }
    } else {
      btnColor = '';
    }

    const classes = clsx(
      color !== 'none' && 'btn',
      btnColor,
      rounded && 'btn-rounded',
      floating && 'btn-floating',
      size && `btn-${size}`,
      `${href || Tag !== 'button' ? (disabled ? 'disabled' : '') : ''}`,
      block && 'btn-block',
      isActive && 'active',
      className
    );

    if (href && Tag !== 'a') {
      Tag = 'a';
    }

    return ['hr', 'img', 'input'].includes(Tag) || noRipple ? (
      <Tag
        className={classes}
        onClick={
          toggle
            ? () => {
                setActive(!isActive);
              }
            : undefined
        }
        disabled={disabled && Tag === 'button' ? true : undefined}
        href={href}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    ) : (
      <MDBRipple
        rippleTag={Tag}
        rippleColor={waveColor}
        className={classes}
        onClick={
          toggle
            ? () => {
                setActive(!isActive);
              }
            : undefined
        }
        disabled={disabled && Tag === 'button' ? true : undefined}
        href={href}
        ref={ref}
        {...props}
      >
        {children}
      </MDBRipple>
    );
  }
);

MDBBtn.defaultProps = { tag: 'button', role: 'button', color: 'primary' };

export default MDBBtn;
