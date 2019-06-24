import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const initialState = Dimensions.get('window');

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState(initialState);

  const onChange = ({ window }) => {
    setDimensions(window);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return dimensions;
};
