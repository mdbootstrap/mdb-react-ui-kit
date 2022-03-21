interface TableProps extends React.AllHTMLAttributes<HTMLElement> {
  align?: 'top' | 'middle' | 'bottom';
  borderColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white';
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'white';
  bordered?: boolean;
  borderless?: boolean;
  small?: boolean;
  hover?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
  classNameResponsive?: string;
  striped?: boolean;
  responsive?: string | boolean;
}

export { TableProps };
