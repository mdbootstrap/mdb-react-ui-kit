type ProgressBarProps = {
  animated?: boolean;
  bgColor?: string;
  className?: string;
  striped?: boolean;
  style?: Record<string, unknown>;
  tag?: React.ComponentProps<any>;
  valuemax?: string | number;
  valuemin?: string | number;
  width?: string | number;
  [rest: string]: any;
};

export { ProgressBarProps };
