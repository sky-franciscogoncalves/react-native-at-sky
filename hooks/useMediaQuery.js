import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export const useMediaQuery = (size, measure = 'width') => {
  const initialState = Dimensions.get('window')[measure];
  const [isBigger, setIsBigger] = useState(initialState > size);

  const onChange = ({ window }) => {
    setIsBigger(window[measure] > size);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return isBigger;
};
