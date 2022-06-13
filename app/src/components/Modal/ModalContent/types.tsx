import { BaseComponent } from 'src/types/baseComponent';

interface ModalContentProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { ModalContentProps };
