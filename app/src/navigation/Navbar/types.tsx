type NavbarProps = {
  children?: React.ReactNode;
  className?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
  light?: boolean;
  dark?: boolean;
  color?: string;
  expand?: string | boolean;
  bgColor?: string;
  fixed?: string;
  sticky?: boolean;
};

export { NavbarProps };
