import { placement } from 'src/types/placement';
import { BaseComponent } from 'src/types/baseComponent';

interface DropdownProps extends BaseComponent {
  animation?: boolean;
  group?: boolean;
  isOpen?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  options?: Record<string, unknown>;
  placement?: placement;
  tag?: React.ComponentProps<any>;
}

export { DropdownProps };
