interface TabsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
    ref?: React.Ref<any>;
    onShow?: () => any;
    onHide?: () => any;
}
export { TabsLinkProps };
