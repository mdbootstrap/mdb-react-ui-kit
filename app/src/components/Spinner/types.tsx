interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'dark'
    | 'muted'
    | 'white'
    | 'info'
    | 'body'
    | 'black-50'
    | 'white-50';
  grow?: boolean;
  size?: 'lg' | 'sm';
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { SpinnerProps };
