import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import type { RippleWaveProps } from './types';

const MDBRippleWave: React.FC<RippleWaveProps> = ({ ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const rippleClasses = clsx('ripple-wave', isActive && 'active');

  useEffect(() => {
    const secondTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIsActive(true);
    }, 50);

    return () => {
      clearTimeout(secondTimer);
    };
  }, []);

  return <div className={rippleClasses} {...props}></div>;
};

export default MDBRippleWave;
