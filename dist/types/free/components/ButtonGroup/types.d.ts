import { BaseComponent } from '../../../types/baseComponent';
import { size } from '../../../types/size';
interface ButtonGroupProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    size?: size;
    shadow?: '0' | '1' | '2' | '3' | '4' | '5';
    toolbar?: boolean;
    vertical?: boolean;
    tag?: React.ComponentProps<any>;
}
export { ButtonGroupProps };
