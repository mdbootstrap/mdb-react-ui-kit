import clsx from 'clsx';
import React, { useContext, useEffect } from 'react';
import { ScrollspyContext } from '../ScrollspyContext';
import type { ScrollspyNavLinkProps } from './types';

const MDBScrollspyLink: React.FC<ScrollspyNavLinkProps> = ({
  className,
  collapsible,
  targetRef,
  children,
  subsections,
  onClick,
  onActivate,
  ...props
}) => {
  const { activeElement, setTargets } = useContext(ScrollspyContext);

  const checkSubsections = () => subsections?.some((element) => element.current.id === activeElement?.id);

  const isNotSubsectionActive = activeElement?.id === targetRef.current?.id;
  const isActive = isNotSubsectionActive || checkSubsections();

  isNotSubsectionActive && onActivate?.(activeElement?.id);
  const aClasses = clsx('nav-link', collapsible && 'collapsible-scrollspy', isActive && 'active', className);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const element = targetRef?.current;

    element?.scrollIntoView({ behavior: 'smooth' });
    onClick?.(e);
  };

  useEffect(() => {
    setTargets((value: Array<React.MutableRefObject<any>>) => [...value, targetRef]);
  }, [setTargets, targetRef]);

  return (
    <li className='nav-item' style={{ cursor: 'pointer' }}>
      <a className={aClasses} onClick={handleClick} {...props}>
        {children}
      </a>
    </li>
  );
};

MDBScrollspyLink.defaultProps = {};

export default MDBScrollspyLink;
