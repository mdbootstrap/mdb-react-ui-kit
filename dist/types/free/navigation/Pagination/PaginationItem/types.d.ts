/// <reference types="react" />
import { BaseComponent } from '../../../../types/baseComponent';
interface PaginationItemProps extends BaseComponent {
    active?: boolean;
    disabled?: boolean;
    ref?: React.Ref<HTMLLIElement>;
}
export type { PaginationItemProps };
