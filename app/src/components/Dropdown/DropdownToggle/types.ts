import { ComponentProps } from 'react';
import { BaseComponent } from '../../../../src/types/baseComponent';

export interface DropdownToggleProps extends BaseComponent {
  split?: boolean;
  tag?: ComponentProps<any>;
}
