import React, { RefObject } from 'react';
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
declare const Portal: ({ children, containerRef, disablePortal }: PortalTypes) => JSX.Element | null;
export default Portal;
