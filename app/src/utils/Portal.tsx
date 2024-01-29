import React, { useState, useEffect, RefObject } from 'react';
import { createPortal } from 'react-dom';

type PortalTypes = {
  children: React.ReactNode;
  /**
   * The reference to the container element where the elements will be rendered. If not specified the element will be rendered in the document body.
   * */
  containerRef?: RefObject<HTMLElement>;
  /**
   * When `true` children will be rendered in normal DOM hierarchy.
   * @default false
   * */
  disablePortal?: boolean;
};

/**
 * Renders elements outside the component's normal DOM hierarchy.
 */
const Portal = ({ children, containerRef, disablePortal }: PortalTypes) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    !disablePortal && setMounted(true);
  }, [disablePortal]);

  if (disablePortal) {
    return <>{children}</>;
  }

  return mounted ? createPortal(<>{children}</>, containerRef?.current || document.body) : null;
};

export default Portal;
