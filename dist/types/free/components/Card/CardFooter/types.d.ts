import { BaseComponent } from '../../../../types/baseComponent';
import { backgroundColor } from '../../../../types/colors';
interface CardFooterProps extends BaseComponent {
    border?: string;
    background?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export { CardFooterProps };
