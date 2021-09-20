import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import type { NavbarProps } from './types';

const getExpandClass = (expand: boolean | string): string | undefined => {
  if (expand === false) return;

  if (expand === true || expand === 'xs') 'navbar-expand';

  return `navbar-expand-${expand}`;
};

const MDBNavbar: React.FC<NavbarProps> = React.forwardRef<HTMLAllCollection, NavbarProps>(
  (
    {
      className,
      children,
      light,
      dark,
      scrolling,
      fixed,
      sticky,
      scrollingNavbarOffset,
      color,
      transparent,
      expand,
      tag: Tag,
      bgColor,
      ...props
    },
    ref
  ) => {
    const [collapsed, setCollapsed] = useState(false);

    const classes = clsx(
      {
        'navbar-light': light,
        'navbar-dark': dark,
        'scrolling-navbar': scrolling || scrollingNavbarOffset,
        'top-nav-collapse': collapsed,
        [`text-${color}`]: color && transparent ? collapsed : color,
      },
      fixed && `fixed-${fixed}`,
      sticky && 'sticky-top',
      'navbar',
      expand && getExpandClass(expand),
      bgColor && `bg-${bgColor}`,
      className
    );

    const handleScroll = useCallback(() => {
      if (window.pageYOffset > scrollingNavbarOffset) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }, [scrollingNavbarOffset]);

    useEffect(() => {
      if (scrolling || scrollingNavbarOffset) {
        window.addEventListener('scroll', handleScroll);
      }
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll, scrolling, scrollingNavbarOffset]);

    return (
      <Tag className={classes} role='navigation' {...props} ref={ref}>
        {children}
      </Tag>
    );
  }
);

MDBNavbar.defaultProps = {
  tag: 'nav',
};

export default MDBNavbar;
