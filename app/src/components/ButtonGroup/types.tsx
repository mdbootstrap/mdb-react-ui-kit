interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLElement>, 'size'> {
  ref?: React.ForwardedRef<HTMLAllCollection>;
  size?: 'sm' | 'lg';
  shadow?: '0' | '1' | '2' | '3' | '4' | '5';
  toolbar?: boolean;
  vertical?: boolean;
  tag?: React.ComponentProps<any>;
}

export { ButtonGroupProps };
