interface ProgressBarProps extends React.HTMLAttributes<HTMLElement> {
  animated?: boolean;
  bgColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'dark'
    | 'white'
    | 'info'
    | 'transparent';
  ref?: React.ForwardedRef<HTMLAllCollection>;
  striped?: boolean;
  tag?: React.ComponentProps<any>;
  valuemax?: string | number;
  valuemin?: string | number;
  valuenow?: string | number;
  width?: string | number;
  [rest: string]: any;
}

export { ProgressBarProps };
