interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  animation?: boolean;
  group?: boolean;
  isOpen?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
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
  tag?: React.ComponentProps<any>;
}

export { DropdownProps };
