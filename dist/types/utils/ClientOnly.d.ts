import React from 'react';
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
declare const MDBClientOnly: ({ children }: MDBClientOnlyProps) => JSX.Element;
export default MDBClientOnly;
