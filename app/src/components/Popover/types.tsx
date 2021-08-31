type PopoverProps = {
  btnChildren?: React.ReactNode;
  btnClassName?: string;
  className?: string;
  dismiss?: boolean;
  isOpen?: boolean;
  tag?: React.ComponentProps<any>;
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
  poperStyle?: Record<string, unknown>;
  popperTag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { PopoverProps };
