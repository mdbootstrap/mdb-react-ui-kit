/// <reference types="react" />
import { BaseComponent } from '../../../types/baseComponent';
import { textColor, backgroundColor } from '../../../types/colors';
type TypographyProps = BaseComponent & {
    blockquote?: boolean;
    color?: textColor;
    listUnStyled?: boolean;
    listInLine?: boolean;
    note?: boolean;
    noteColor?: backgroundColor;
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type { TypographyProps };
