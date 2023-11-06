import { BaseComponent } from '../../../types/baseComponent';
import { textColor } from '../../../types/colors';
interface BreadcrumbProps extends BaseComponent {
    bold?: boolean;
    tag?: React.ComponentProps<any>;
    color?: textColor;
    uppercase?: boolean;
    ref?: React.Ref<HTMLOListElement>;
}
export type { BreadcrumbProps };
