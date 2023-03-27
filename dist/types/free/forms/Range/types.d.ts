import React from 'react';
interface RangeProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    disableTooltip?: boolean;
    label?: string;
    labelId?: string;
    labelClass?: string;
    step?: string;
    inputRef?: React.MutableRefObject<any>;
}
export { RangeProps };
