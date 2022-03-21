interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  height?: number | string;
  ref?: React.ForwardedRef<HTMLAllCollection>;
  tag?: React.ComponentProps<any>;
}

export { ProgressProps };
