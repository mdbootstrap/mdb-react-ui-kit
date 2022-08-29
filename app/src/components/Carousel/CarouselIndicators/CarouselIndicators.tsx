import clsx from 'clsx';
import React, { useContext } from 'react';
import { CarouselContext } from '../utils/CarouselContext';
import type { CarouselIndicatorsProps } from './types';

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ imagesCount, to }) => {
  const { active } = useContext(CarouselContext);

  return (
    <ol className='carousel-indicators'>
      {Array.from(Array(imagesCount)).map((item, i) => (
        <li data-mdb-target={i} key={i} className={clsx(active === i && 'active')} onClick={() => to(i)} />
      ))}
    </ol>
  );
};

export default CarouselIndicators;
