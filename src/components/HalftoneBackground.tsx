import { HalftoneParams } from "../hooks/useHalftone";
import { useEffect, useState } from "react";

interface HalftoneBackgroundProps {
  params: HalftoneParams;
}

export default function HalftoneBackground({ params }: HalftoneBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate how much larger the background needs to be to cover screen after scaling
  // Add extra buffer for mobile rendering differences
  const oversizeMultiplier = Math.max(1.5, 1 / params.scale + 0.5);
  
  return (
    <div 
      className="absolute"
      style={{
        backgroundImage: `linear-gradient(${params.linearAngle}deg, transparent, ${params.gradientColor}${Math.floor(params.opacity * 255).toString(16).padStart(2, '0')}), radial-gradient(${params.dotSize}px at center, ${params.dotColor}, ${params.backgroundColor})`,
        backgroundBlendMode: 'overlay',
        backgroundSize: `100% 100%, ${params.gridSize}px ${params.gridSize}px`,
        filter: `blur(${params.blur}px) contrast(${params.contrast})`,
        transform: `scale(${params.scale})`,
        transformOrigin: 'center',
        width: `${100 * oversizeMultiplier}vw`,
        height: `${100 * oversizeMultiplier}vh`,
        left: `${50 - 50 * oversizeMultiplier}vw`,
        top: `${50 - 50 * oversizeMultiplier}vh`,
        // Force hardware acceleration on mobile
        willChange: isMobile ? 'transform' : 'auto',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    />
  );
} 