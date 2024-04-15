/// <reference types="react" />
import { BaseComponent } from '../../../types/baseComponent';
import { textColor } from '../../../types/colors';
import { size } from '../../../types/size';
interface SpinnerProps extends BaseComponent {
    color?: textColor;
    grow?: boolean;
    size?: size;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export type { SpinnerProps };
