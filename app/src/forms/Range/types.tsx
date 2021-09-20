import React from 'react';

type RangeProps = {
  className?: string;
  id?: string;
  label?: string;
  labelId?: string;
  labelClass?: string;
  min?: string;
  max?: string;
  step?: string;
  value?: number;
  name?: string;
  [rest: string]: any;
};

export { RangeProps };
