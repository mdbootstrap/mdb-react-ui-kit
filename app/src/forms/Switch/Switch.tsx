import React from 'react';
import type { SwitchProps } from './types';
import MDBCheckbox from '../Checkbox/Checkbox';

const MDBSwitch: React.FC<SwitchProps> = React.forwardRef<HTMLAllCollection, SwitchProps>(({ ...props }, ref) => {
  return <MDBCheckbox toggleSwitch type='checkbox' ref={ref} {...props} />;
});

export default MDBSwitch;
