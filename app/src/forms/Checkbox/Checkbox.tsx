import React from 'react';
import InputTemplate from '../InputTemplate/InputTemplate';
import type { CheckboxProps } from './types';

const MDBCheckbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return <InputTemplate type='checkbox' {...props} />;
};

export default MDBCheckbox;
