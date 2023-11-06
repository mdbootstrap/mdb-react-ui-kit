import { BaseComponent } from '../../../../types/baseComponent';
interface ModalDialogProps extends BaseComponent {
    centered?: boolean;
    size?: 'sm' | 'lg' | 'xl' | 'fullscreen' | 'fullscreen-sm-down' | 'fullscreen-md-down' | 'fullscreen-lg-down' | 'fullscreen-xl-down' | 'fullscreen-xxl-down';
    scrollable?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export type { ModalDialogProps };
