interface CollapseProps extends React.HTMLAttributes<HTMLElement> {
  center?: boolean;
  collapseRef?: React.RefObject<any>;
  navbar?: boolean;
  show?: boolean | string;
  tag?: React.ComponentProps<any>;
}

export { CollapseProps };
