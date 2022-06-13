import { BaseComponent } from 'src/types/baseComponent';

interface CardTitleProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

export { CardTitleProps };
