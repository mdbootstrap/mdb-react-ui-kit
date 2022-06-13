import { BaseComponent } from 'src/types/baseComponent';
import { textColor } from 'src/types/colors';
import { size } from 'src/types/size';

interface SpinnerProps extends BaseComponent {
  color?: textColor;
  grow?: boolean;
  size?: size;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { SpinnerProps };
