interface PaginationProps extends Omit<React.AllHTMLAttributes<HTMLElement>, 'size' | 'start'> {
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: 'lg' | 'sm';
  tag?: React.ComponentProps<any>;
  circle?: boolean;
  ref?: React.Ref<any>;
}

export { PaginationProps };
