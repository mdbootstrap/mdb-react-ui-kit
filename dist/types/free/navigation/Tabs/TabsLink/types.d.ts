/// <reference types="react" />
interface TabsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
    ref?: React.Ref<any>;
    onOpen?: () => any;
    onClose?: () => any;
}
export type { TabsLinkProps };
