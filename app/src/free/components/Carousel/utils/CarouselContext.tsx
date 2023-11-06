import { createContext } from 'react';

interface CarouselContextProps {
  active: number;
}

const CarouselContext = createContext<CarouselContextProps>({
  active: 0,
});

export { CarouselContext };
