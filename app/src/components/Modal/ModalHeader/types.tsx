import { BaseComponent } from 'src/types/baseComponent';

interface ModalHeaderProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { ModalHeaderProps };
