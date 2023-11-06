import React from 'react';
import type { RadioProps } from './types';
import InputTemplate from '../InputTemplate/InputTemplate';

const MDBRadio: React.FC<RadioProps> = ({ ...props }) => {
  return <InputTemplate type='radio' {...props} />;
};

export default MDBRadio;
