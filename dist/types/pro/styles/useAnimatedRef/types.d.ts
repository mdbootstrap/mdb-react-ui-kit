import { RefObject } from 'react';
interface useAnimatedRefProps {
    animation?: 'fade-in' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'fade-in-up' | 'fade-out' | 'fade-out-down' | 'fade-out-left' | 'fade-out-right' | 'fade-out-up' | 'slide-in-down' | 'slide-in-left' | 'slide-in-right' | 'slide-in-up' | 'slide-out-down' | 'slide-out-left' | 'slide-out-right' | 'slide-out-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'slide-up' | 'zoom-in' | 'zoom-out' | 'tada' | 'pulse' | 'drop-in' | 'drop-out' | 'fly-in' | 'fly-in-up' | 'fly-in-down' | 'fly-in-left' | 'fly-in-right' | 'fly-out' | 'fly-out-up' | 'fly-out-down' | 'fly-out-left' | 'fly-out-right' | 'browse-in' | 'browse-out' | 'browse-out-left' | 'browse-out-right' | 'jiggle' | 'flash' | 'shake' | 'glow';
    delay?: number;
    duration?: number;
    infinite?: boolean;
    reset?: boolean;
    repeatOnScroll?: boolean;
    start?: StartType;
    externalElement?: RefObject<any>;
}
type StartType = 'onLoad' | 'onHover' | 'onClick' | 'onScroll';
export { useAnimatedRefProps, StartType };
