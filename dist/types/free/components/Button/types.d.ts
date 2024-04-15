/// <reference types="react" />
type btnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type anchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type joinedTypes = btnProps & anchorProps;
interface ButtonProps extends Omit<joinedTypes, 'size' | 'color'> {
    active?: boolean;
    block?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'muted' | 'white' | 'info' | 'none' | 'link' | 'tertiary';
    floating?: boolean;
    noRipple?: boolean;
    outline?: boolean;
    rippleUnbound?: boolean;
    rippleColor?: string;
    rippleRadius?: number;
    rippleDuration?: number;
    rippleCentered?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    rounded?: boolean;
    size?: 'sm' | 'lg';
    toggle?: boolean;
    target?: string;
    tag?: React.ComponentProps<any>;
    to?: string;
}
export type { ButtonProps };
