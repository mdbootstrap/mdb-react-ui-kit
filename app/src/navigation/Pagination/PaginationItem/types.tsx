import { BaseComponent } from 'src/types/baseComponent';

interface PaginationItemProps extends BaseComponent {
  active?: boolean;
  disabled?: boolean;
  ref?: React.Ref<HTMLLIElement>;
}

export { PaginationItemProps };
