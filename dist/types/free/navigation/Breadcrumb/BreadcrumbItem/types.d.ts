import { BaseComponent } from '../../../../types/baseComponent';
interface BreadcrumbItemProp extends BaseComponent {
    active?: boolean;
    current?: 'page' | 'step' | 'location';
    ref?: React.Ref<HTMLLIElement>;
}
export { BreadcrumbItemProp };
