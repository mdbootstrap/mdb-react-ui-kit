import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

type ThumbProps = {
  min?: string | number;
  max?: string | number;
  value?: string | number | readonly string[];
  showThumb: boolean;
};

const RangeThumb: React.FC<ThumbProps> = ({ value, min, max, showThumb }) => {
  const numberValue = Number(value);

  const [thumbPosition, setThumbPosition] = useState(
    ((numberValue ? numberValue : 0 - Number(min)) * 100) / (Number(max) - Number(min))
  );

  const thumbClasses = clsx('thumb', showThumb && 'thumb-active');

  useEffect(() => {
    setThumbPosition(((Number(value) - Number(min)) * 100) / (Number(max) - Number(min)));
  }, [value, max, min]);

  return (
    <span className={thumbClasses} style={{ left: `calc(${thumbPosition}% + (${8 - thumbPosition * 0.15}px))` }}>
      <span className='thumb-value'>{value}</span>
    </span>
  );
};

RangeThumb.defaultProps = { min: '0', max: '100' };

export default RangeThumb;
