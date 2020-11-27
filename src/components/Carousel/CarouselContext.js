import React from 'react';

const defaultValue = {
  activeItemId: null
};

const CarouselContext = React.createContext(defaultValue);

export { CarouselContext as default };
