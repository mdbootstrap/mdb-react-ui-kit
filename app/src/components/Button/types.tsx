type ButtonProps = {
  className?: string;
  color?: string;
  outline?: boolean;
  rounded?: boolean;
  floating?: boolean;
  disabled?: boolean;
  size?: string;
  href?: string;
  role?: string;
  block?: boolean;
  type?: 'reset' | 'submit' | 'button';
  active?: boolean;
  toggle?: boolean;
  target?: string;
  value?: string | number;
  noRipple?: boolean;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { ButtonProps };
