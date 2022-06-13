import { BaseComponent } from 'src/types/baseComponent';

interface CardTextProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

export { CardTextProps };
