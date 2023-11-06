import { BaseComponent } from '../../../types/baseComponent';
import { backgroundColor, textColor } from '../../../types/colors';
interface FooterProps extends BaseComponent {
    color?: textColor;
    tag?: React.ComponentProps<any>;
    bgColor?: backgroundColor;
    ref?: React.Ref<HTMLDivElement>;
}
export type { FooterProps };
