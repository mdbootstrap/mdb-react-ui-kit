/// <reference types="react" />
import { BaseComponent } from '../../../../types/baseComponent';
interface CardGroupProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}
export type { CardGroupProps };
