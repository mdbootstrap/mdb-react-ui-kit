import { BaseComponent } from 'src/types/baseComponent';

interface CardOverlayProps extends BaseComponent {
  tag?: React.ComponentProps<any>;
  ref?: React.ForwardedRef<HTMLAllCollection>;
}

export { CardOverlayProps };
