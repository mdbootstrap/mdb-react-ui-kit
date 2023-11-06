import React from 'react';
interface InputTemplateProps extends React.InputHTMLAttributes<HTMLInputElement> {
    btn?: boolean;
    btnColor?: string;
    disableWrapper?: boolean;
    inputRef?: React.MutableRefObject<any>;
    label?: React.ReactNode;
    labelClass?: string;
    labelStyle?: React.CSSProperties;
    inline?: boolean;
    toggleSwitch?: boolean;
    wrapperTag?: React.ComponentProps<any>;
    wrapperClass?: string;
    wrapperStyle?: React.CSSProperties;
}
export type { InputTemplateProps };
