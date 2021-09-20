type CollapseProps = {
  className?: string;
  navbar?: boolean;
  show?: boolean | string;
  center?: boolean;
  style?: Record<string, unknown>;
  tag?: React.ComponentProps<any>;
  [rest: string]: any;
};

export { CollapseProps };
