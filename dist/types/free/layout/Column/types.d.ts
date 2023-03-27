import { BaseComponent } from '../../../types/baseComponent';
interface ColumnProps extends BaseComponent {
    center?: boolean;
    end?: boolean;
    lg?: string | number;
    md?: string | number;
    offsetSm?: string | number;
    offsetMd?: string | number;
    offsetLg?: string | number;
    order?: string | number;
    size?: string | number;
    sm?: string | number;
    start?: boolean;
    tag?: React.ComponentProps<any>;
    xl?: string | number;
    xxl?: string | number;
    xs?: string | number;
}
export { ColumnProps };
