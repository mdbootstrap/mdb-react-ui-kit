import React from 'react';
import type { RadioProps } from './types';
import MDBCheckbox from '../Checkbox/Checkbox';

const MDBRadio: React.FC<RadioProps> = React.forwardRef<HTMLAllCollection, RadioProps>(({ ...props }, ref) => {
  return <MDBCheckbox type='radio' ref={ref} {...props} />;
});

export default MDBRadio;
