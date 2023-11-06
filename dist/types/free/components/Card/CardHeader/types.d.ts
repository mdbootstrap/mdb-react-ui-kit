import { BaseComponent } from '../../../../types/baseComponent';
import { backgroundColor } from '../../../../types/colors';
interface CardHeaderProps extends BaseComponent {
    border?: string;
    background?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export type { CardHeaderProps };
