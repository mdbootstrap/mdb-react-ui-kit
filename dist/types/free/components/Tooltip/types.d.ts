import { BaseComponent } from '../../../types/baseComponent';
import { placement } from '../../../types/placement';
interface TooltipProps extends BaseComponent {
    disableMouseDown?: boolean;
    options?: Record<string, unknown>;
    placement?: placement;
    tag?: React.ComponentProps<any>;
    tooltipTag?: React.ComponentProps<any>;
    title?: React.ReactNode;
    wrapperProps?: Record<string, unknown>;
    wrapperClass?: string;
    onShow?: () => any;
    onHide?: () => any;
}
export { TooltipProps };
