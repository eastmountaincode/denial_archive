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
  scale: number;
}

export function useHalftone() {
  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [dotSize, setDotSize] = useState(3.5);
  const [gridSize, setGridSize] = useState(4.4);
  const [linearAngle, setLinearAngle] = useState(45);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [opacity, setOpacity] = useState(0.95);
  const [speed, setSpeed] = useState(14);
  const [dotColor, setDotColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [gradientColor, setGradientColor] = useState('#000000');
  const [scale, setScale] = useState(0.8); // Default to 80% to match your perfect setting

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
    scale,
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
    setScale,
  };

  return { params, controls };
} 