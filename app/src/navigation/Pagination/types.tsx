type PaginationProps = {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  center?: boolean;
  end?: boolean;
  start?: boolean;
  size?: string;
  tag?: React.ComponentProps<any>;
  circle?: boolean;
  [rest: string]: any;
};

export { PaginationProps };
