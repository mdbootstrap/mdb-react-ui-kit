type NavbarLinkProps = {
  children?: React.ReactNode;
  className?: string;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
  active?: boolean;
  disabled?: boolean;
  link?: boolean;
};

export { NavbarLinkProps };
