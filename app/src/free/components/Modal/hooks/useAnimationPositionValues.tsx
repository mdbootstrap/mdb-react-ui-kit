import { useCallback } from 'react';

const useAnimationPositionValues = (animationDirection: string) => {
  const getAnimationValue = useCallback(() => {
    if (animationDirection === 'top') {
      return { top: -50, left: 0 };
    } else if (animationDirection === 'bottom') {
      return { top: 50, left: 0 };
    } else if (animationDirection === 'left') {
      return { top: 0, left: -50 };
    } else if (animationDirection === 'right') {
      return { top: 0, left: 50 };
    }
    return { top: 0, left: 0 };
  }, [animationDirection]);

  return getAnimationValue();
};

export default useAnimationPositionValues;
