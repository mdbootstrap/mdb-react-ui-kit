import React from 'react';
type TextAreaElement = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'value' | 'defaultValue'>;
type TextAreaProps = TextAreaElement & {
    contrast?: boolean;
    defaultValue?: string;
    label?: React.ReactNode;
    labelStyle?: React.CSSProperties;
    labelClass?: string;
    labelRef?: React.MutableRefObject<any>;
    inputRef?: React.MutableRefObject<any>;
    readonly?: boolean;
    size?: string;
    textarea?: boolean;
    value?: string;
    wrapperTag?: React.ComponentProps<any>;
    wrapperClass?: string;
    wrapperStyle?: Record<string, unknown>;
};
export type { TextAreaProps };
