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
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [dotSize, setDotSize] = useState(3.5);
  const [gridSize, setGridSize] = useState(4.4);
  const [linearAngle, setLinearAngle] = useState(45);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [opacity, setOpacity] = useState(1.0);
  const [speed, setSpeed] = useState(isMobile ? 30 : 14); // Mobile: 30, Desktop: 14
  const [dotColor, setDotColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [gradientColor, setGradientColor] = useState('#000000');
  const [scale, setScale] = useState(isMobile ? 0.54 : 0.68); // Mobile: 0.54, Desktop: 0.68

  // Update scale and speed when mobile detection changes
  useEffect(() => {
    setScale(isMobile ? 0.54 : 0.68);
    setSpeed(isMobile ? 30 : 14);
  }, [isMobile]);

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