type DropdownProps = {
  className?: string;
  group?: boolean;
  isOpen?: boolean;
  dropup?: boolean;
  dropright?: boolean;
  dropleft?: boolean;
  options?: Record<string, unknown>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
  animation?: boolean;
};

export { DropdownProps };
