import { useState, useEffect } from 'react';

export interface HalftoneParams {
  blur: number;
  contrast: number;
  dotSize: number;
  gridSize: number;
  linearAngle: number;
  isAutoRotating: boolean;
  opacity: number;
  speed: number;
  dotColor: string;
  backgroundColor: string;
  gradientColor: string;
}

export function useHalftone() {
  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [dotSize, setDotSize] = useState(0.9);
  const [gridSize, setGridSize] = useState(1.2);
  const [linearAngle, setLinearAngle] = useState(45);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [opacity, setOpacity] = useState(0.19);
  const [speed, setSpeed] = useState(83);
  const [dotColor, setDotColor] = useState('#DFD816');
  const [backgroundColor, setBackgroundColor] = useState('#30302C');
  const [gradientColor, setGradientColor] = useState('#090707');

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setLinearAngle(prev => (prev + 1) % 360);
    }, 101 - speed); // Convert speed (1-100) to interval (100ms-1ms)

    return () => clearInterval(interval);
  }, [isAutoRotating, speed]);

  const params: HalftoneParams = {
    blur,
    contrast,
    dotSize,
    gridSize,
    linearAngle,
    isAutoRotating,
    opacity,
    speed,
    dotColor,
    backgroundColor,
    gradientColor,
  };

  const controls = {
    setBlur,
    setContrast,
    setDotSize,
    setGridSize,
    setLinearAngle,
    setIsAutoRotating,
    setOpacity,
    setSpeed,
    setDotColor,
    setBackgroundColor,
    setGradientColor,
  };

  return { params, controls };
} 