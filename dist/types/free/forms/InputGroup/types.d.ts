import React from 'react';
type InputGroupProps = Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
    noWrap?: boolean;
    noBorder?: boolean;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    size?: string;
    tag?: React.ComponentProps<any>;
    textTag?: React.ComponentProps<any>;
    textClass?: string;
    textBefore?: React.ReactNode | Array<React.ReactNode>;
    textAfter?: React.ReactNode | Array<React.ReactNode>;
    textProps?: Record<string, unknown>;
};
export type { InputGroupProps };
