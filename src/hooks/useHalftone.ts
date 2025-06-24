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
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  
  // Detect mobile device and pixel ratio
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
      setDevicePixelRatio(window.devicePixelRatio || 1);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const [blur, setBlur] = useState(0);
  const [contrast, setContrast] = useState(100);
  const [dotSize, setDotSize] = useState(3.5);
  const [gridSize, setGridSize] = useState(4.4);
  const [linearAngle, setLinearAngle] = useState(45);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [opacity, setOpacity] = useState(1.0);
  // Helper function to get optimal scale based on device
  const getOptimalScale = () => {
    if (isMobile) {
      // Mobile devices
      if (devicePixelRatio === 2) return 0.51; // Mobile DPR 2: 0.51
      return 0.54; // Mobile other DPR: 0.54
    } else {
      // Desktop devices
      return 0.68; // Desktop (all DPR): 0.68
    }
  };

  const [speed, setSpeed] = useState(14); // Will be updated in useEffect
  const [dotColor, setDotColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [gradientColor, setGradientColor] = useState('#000000');
  const [scale, setScale] = useState(0.68); // Default to desktop, will be updated in useEffect

  // Update scale and speed when device detection changes
  useEffect(() => {
    setScale(getOptimalScale());
    setSpeed(isMobile ? 33 : 33);
  }, [isMobile, devicePixelRatio]);

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