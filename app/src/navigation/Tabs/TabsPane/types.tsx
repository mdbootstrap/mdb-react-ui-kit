import { BaseComponent } from 'src/types/baseComponent';

interface TabsPaneProps extends BaseComponent {
  show?: boolean;
  tag?: React.ComponentProps<any>;
  ref?: React.Ref<any>;
}

export { TabsPaneProps };
