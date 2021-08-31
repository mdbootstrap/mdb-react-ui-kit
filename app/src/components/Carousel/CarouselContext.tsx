import React from 'react';

interface CarouselProps {
  activeItem: number;
  imagesCount: number;
  fade: boolean;
  prev: number;
  setPrev: React.SetStateAction<any>;
  clicked: string;
  setActiveInterval: React.SetStateAction<any>;
}

const CarouselContext = React.createContext<CarouselProps>({
  activeItem: 0,
  imagesCount: 0,
  fade: false,
  prev: 0,
  setPrev: null,
  clicked: '',
  setActiveInterval: null,
});

export { CarouselContext };
