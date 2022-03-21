import { ButtonProps } from '../../Button/types';

interface DropdownToggleProps extends ButtonProps {
  split?: boolean;
  tag?: React.ComponentProps<any>;
}

export { DropdownToggleProps };
