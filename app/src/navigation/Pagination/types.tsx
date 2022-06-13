import { BaseComponent } from 'src/types/baseComponent';
import { size } from 'src/types/size';

interface PaginationProps extends BaseComponent {
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: size;
  circle?: boolean;
  ref?: React.Ref<HTMLUListElement>;
}

export { PaginationProps };
