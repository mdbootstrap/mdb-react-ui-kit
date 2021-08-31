type NavbarItemProps = {
  children?: React.ReactNode;
  className?: string;
  active?: boolean;
  text?: boolean;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { NavbarItemProps };
