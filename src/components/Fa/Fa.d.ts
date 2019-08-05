import * as React from 'react';

declare const MDBIcon: React.FunctionComponent<{
    border?: boolean;
    brand?: boolean;
    className?: string;
    fab?: boolean;
    fal?: boolean;
    far?: boolean;
    fixed?: boolean;
    flip?: 'horizontal' | 'vertical';
    icon: string;
    inverse?: boolean;
    light?: boolean;
    list?: boolean;
    pull?: 'left' | 'right';
    pulse?: boolean;
    regular?: boolean;
    rotate?: '90' | '180' | '270';
    size?: "lg" | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    spin?: boolean;
    stack?: '1x' | '2x';
    onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    [rest: string]: any;
}>;

export default MDBIcon;