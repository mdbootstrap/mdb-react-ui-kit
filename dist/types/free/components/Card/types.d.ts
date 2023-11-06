import { backgroundColor } from '../../../types/colors';
import { BaseComponent } from '../../../types/baseComponent';
interface CardProps extends BaseComponent {
    alignment?: string;
    border?: string;
    background?: backgroundColor;
    shadow?: '0' | '1' | '2' | '3' | '4' | '5';
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export type { CardProps };
