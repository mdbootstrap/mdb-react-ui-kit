import { BaseComponent } from 'src/types/baseComponent';
import { textColor } from 'src/types/colors';

interface BreadcrumbProps extends BaseComponent {
  bold?: boolean;
  tag?: React.ComponentProps<any>;
  color?: textColor;
  uppercase?: boolean;
  ref?: React.Ref<HTMLOListElement>;
}

export { BreadcrumbProps };
