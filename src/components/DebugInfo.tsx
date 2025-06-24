import { useEffect, useState } from "react";
import { HalftoneParams } from "../hooks/useHalftone";

interface DebugInfoProps {
  params: HalftoneParams;
}

export default function DebugInfo({ params }: DebugInfoProps) {
  const [debugInfo, setDebugInfo] = useState({
    userAgent: '',
    screenWidth: 0,
    screenHeight: 0,
    devicePixelRatio: 0,
    innerWidth: 0,
    innerHeight: 0,
  });

  useEffect(() => {
    const updateDebugInfo = () => {
      setDebugInfo({
        userAgent: navigator.userAgent,
        screenWidth: screen.width,
        screenHeight: screen.height,
        devicePixelRatio: window.devicePixelRatio,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    };

    updateDebugInfo();
    window.addEventListener('resize', updateDebugInfo);
    return () => window.removeEventListener('resize', updateDebugInfo);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white text-xs p-4 rounded max-w-xs z-50 font-mono">
      <div className="mb-2 text-yellow-300">Debug Info:</div>
      <div>Scale: {params.scale.toFixed(2)}</div>
      <div>Grid: {params.gridSize.toFixed(1)}px</div>
      <div>Dot: {params.dotSize.toFixed(1)}px</div>
      <div>Screen: {debugInfo.screenWidth}x{debugInfo.screenHeight}</div>
      <div>Window: {debugInfo.innerWidth}x{debugInfo.innerHeight}</div>
      <div>DPR: {debugInfo.devicePixelRatio}</div>
      <div>Mobile: {debugInfo.innerWidth < 768 ? 'Yes' : 'No'}</div>
    </div>
  );
} 