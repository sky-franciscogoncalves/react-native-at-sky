import React, { useEffect, useState } from 'react';
import { useDimensions } from './useDimensions';

const BreakPoint = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 0
};

const breakpointSelect = ({ xs, sm, md, lg, xl }, width) =>
  width >= BreakPoint.xl
    ? xl || lg || md || sm || xs
    : width >= BreakPoint.lg
    ? lg || md || sm || xs
    : width >= BreakPoint.md
    ? md || sm || xs
    : width >= BreakPoint.sm
    ? sm || xs
    : xs;

export const useResponsiveStyles = styles => {
  const { width } = useDimensions();
  return breakpointSelect(styles, width);
};
