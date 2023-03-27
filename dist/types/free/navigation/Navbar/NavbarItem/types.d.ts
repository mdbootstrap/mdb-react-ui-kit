interface NavbarItemProps extends React.AllHTMLAttributes<HTMLElement> {
    active?: boolean;
    text?: boolean;
    tag?: React.ComponentProps<any>;
    ref?: React.Ref<any>;
}
export { NavbarItemProps };
