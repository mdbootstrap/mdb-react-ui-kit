import { BaseComponent } from 'src/types/baseComponent';
import { backgroundColor } from 'src/types/colors';

interface CardFooterProps extends BaseComponent {
  border?: string;
  background?: backgroundColor;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { CardFooterProps };
