import { BaseComponent } from 'src/types/baseComponent';

interface CardGroupProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

export { CardGroupProps };
