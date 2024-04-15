/// <reference types="react" />
import { BaseComponent } from '../../../../types/baseComponent';
import { backgroundColor } from '../../../../types/colors';
interface ProgressBarProps extends BaseComponent {
    animated?: boolean;
    bgColor?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    striped?: boolean;
    tag?: React.ComponentProps<any>;
    valuemax?: string | number;
    valuemin?: string | number;
    valuenow?: string | number;
    width?: string | number;
    [rest: string]: any;
}
export type { ProgressBarProps };
