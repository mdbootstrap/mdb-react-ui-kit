/// <reference types="react" />
interface NavbarLinkProps extends React.AllHTMLAttributes<HTMLElement> {
    tag?: React.ComponentProps<any>;
    active?: boolean;
    disabled?: boolean;
    ref?: React.Ref<any>;
}
export type { NavbarLinkProps };
