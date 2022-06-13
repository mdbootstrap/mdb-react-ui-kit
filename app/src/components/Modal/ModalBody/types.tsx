import { BaseComponent } from 'src/types/baseComponent';

interface ModalBodyProps extends BaseComponent {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { ModalBodyProps };
