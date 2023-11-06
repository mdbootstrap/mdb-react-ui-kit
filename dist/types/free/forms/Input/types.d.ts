import React from 'react';
type InputELement = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;
type InputProps = InputELement & {
    contrast?: boolean;
    label?: React.ReactNode;
    labelStyle?: React.CSSProperties;
    labelClass?: string;
    labelRef?: React.RefObject<HTMLLabelElement>;
    ref?: React.Ref<HTMLInputElement>;
    readonly?: boolean;
    size?: string;
    wrapperTag?: React.ComponentProps<any>;
    wrapperClass?: string;
    wrapperStyle?: React.CSSProperties;
    showCounter?: boolean;
};
export type { InputProps };
