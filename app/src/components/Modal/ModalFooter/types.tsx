import { BaseComponent } from 'src/types/baseComponent';

interface ModalFooterProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { ModalFooterProps };
