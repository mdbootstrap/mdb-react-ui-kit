import React from 'react';
import InputTemplate from '../InputTemplate/InputTemplate';
import type { SwitchProps } from './types';

const MDBSwitch: React.FC<SwitchProps> = ({ ...props }) => {
  return <InputTemplate type='checkbox' toggleSwitch {...props} />;
};

export default MDBSwitch;
