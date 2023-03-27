import React from 'react';
type ThumbProps = {
    min?: string | number;
    max?: string | number;
    value?: string | number | readonly string[];
    showThumb: boolean;
};
declare const RangeThumb: React.FC<ThumbProps>;
export default RangeThumb;
