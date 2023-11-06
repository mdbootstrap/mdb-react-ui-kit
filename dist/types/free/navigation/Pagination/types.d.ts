import { BaseComponent } from '../../../types/baseComponent';
import { size } from '../../../types/size';
interface PaginationProps extends BaseComponent {
    center?: boolean;
    end?: boolean;
    start?: boolean;
    size?: size;
    circle?: boolean;
    ref?: React.Ref<HTMLUListElement>;
}
export type { PaginationProps };
