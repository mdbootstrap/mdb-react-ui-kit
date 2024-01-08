import React, { useEffect, useState } from 'react';

interface MDBClientOnlyProps {
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * `MDBClientOnly` is used to render components only on the client side and avoid SSR related issues.
 * Example usage:
 * ```jsx
 * <MDBClientOnly>
 *  <MDBModal>...</MDBModal>
 * </MDBClientOnly>
 * ```
 */
const MDBClientOnly = ({ children }: MDBClientOnlyProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient ? children : null}</>;
};

export default MDBClientOnly;
