/// <reference types="react" />
import { BaseComponent } from '../../../types/baseComponent';
interface ContainerProps extends BaseComponent {
    breakpoint?: string;
    fluid?: boolean;
    tag?: React.ComponentProps<any>;
}
export type { ContainerProps };
