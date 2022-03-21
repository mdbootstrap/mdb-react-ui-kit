interface CardProps extends React.HTMLAttributes<HTMLElement> {
  alignment?: string;
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
  shadow?: '0' | '1' | '2' | '3' | '4' | '5';
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { CardProps };
