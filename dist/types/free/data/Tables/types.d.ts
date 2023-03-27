import { backgroundColor, textColor } from '../../../types/colors';
interface TableProps extends Omit<React.TableHTMLAttributes<HTMLTableElement>, 'align'> {
    align?: 'top' | 'middle' | 'bottom';
    borderColor?: textColor;
    color?: backgroundColor;
    bordered?: boolean;
    borderless?: boolean;
    small?: boolean;
    hover?: boolean;
    classNameResponsive?: string;
    striped?: boolean;
    responsive?: string | boolean;
}
export { TableProps };
