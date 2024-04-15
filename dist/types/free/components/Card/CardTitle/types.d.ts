/// <reference types="react" />
import { BaseComponent } from '../../../../types/baseComponent';
interface CardTitleProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}
export type { CardTitleProps };
