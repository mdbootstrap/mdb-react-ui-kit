import { ButtonProps } from '../Button/types';

interface PopoverProps extends ButtonProps {
  btnChildren?: React.ReactNode;
  btnClassName?: string;
  dismiss?: boolean;
  isOpen?: boolean;
  options?: Record<string, unknown>;
  placement?:
    | 'top'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';
  poperStyle?: React.CSSProperties;
  popperTag?: React.ComponentProps<any>;
  tag?: React.ComponentProps<any>;
}

export { PopoverProps };
