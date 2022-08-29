import React from 'react';
import { CarouselControlsProps } from './types';

const CarouselControls: React.FC<CarouselControlsProps> = ({ move }) => (
  <>
    <a role='button' className='carousel-control-prev' onClick={() => move('prev')}>
      <span className='carousel-control-prev-icon'></span>
      <span className='visually-hidden'>Previous</span>
    </a>
    <a role='button' className='carousel-control-next' onClick={() => move('next')}>
      <span className='carousel-control-next-icon'></span>
      <span className='visually-hidden'>Next</span>
    </a>
  </>
);

export default CarouselControls;
