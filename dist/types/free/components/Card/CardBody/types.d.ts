import { BaseComponent } from '../../../../types/baseComponent';
interface CardBodyProps extends BaseComponent {
    tag?: React.ComponentProps<any>;
    ref?: React.ForwardedRef<HTMLAllCollection>;
}
export type { CardBodyProps };
