/// <reference types="react" />
import { BaseComponent } from '../../../types/baseComponent';
interface ProgressProps extends BaseComponent {
    height?: number | string;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export type { ProgressProps };
