import { BaseComponent } from '../../../types/baseComponent';
interface RowProps extends BaseComponent {
    around?: boolean;
    between?: boolean;
    bottom?: boolean;
    center?: boolean;
    end?: boolean;
    evenly?: boolean;
    middle?: boolean;
    start?: boolean;
    tag?: React.ComponentProps<any>;
    top?: boolean;
}
export { RowProps };
