import { HalftoneParams } from "../hooks/useHalftone";

interface HalftoneBackgroundProps {
  params: HalftoneParams;
}

export default function HalftoneBackground({ params }: HalftoneBackgroundProps) {
  return (
    <div 
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: `linear-gradient(${params.linearAngle}deg, transparent, ${params.gradientColor}${Math.floor(params.opacity * 255).toString(16).padStart(2, '0')}), radial-gradient(${params.dotSize}px at center, ${params.dotColor}, ${params.backgroundColor})`,
        backgroundBlendMode: 'overlay',
        backgroundSize: `100% 100%, ${params.gridSize}px ${params.gridSize}px`,
        filter: `blur(${params.blur}px) contrast(${params.contrast})`,
      }}
    />
  );
} 