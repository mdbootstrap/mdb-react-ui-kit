interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  border?: string;
  background?:
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
  tag?: React.ComponentProps<any>;
}

export { CardHeaderProps };
