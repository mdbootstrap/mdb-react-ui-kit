import React from 'react';
interface FileProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: React.ReactNode;
    labelClass?: string;
    labelStyle?: React.CSSProperties;
    inputRef?: React.MutableRefObject<any>;
    size?: string;
}
export type { FileProps };
