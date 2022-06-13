import { BaseComponent } from 'src/types/baseComponent';
import { backgroundColor, textColor } from 'src/types/colors';

interface FooterProps extends BaseComponent {
  color?: textColor;
  tag?: React.ComponentProps<any>;
  bgColor?: backgroundColor;
  ref?: React.Ref<HTMLDivElement>;
}

export { FooterProps };
