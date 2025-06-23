import Slider from './Slider';
import { HalftoneParams } from '../hooks/useHalftone';

interface HalftoneControlsProps {
  params: HalftoneParams;
  controls: {
    setBlur: (value: number) => void;
    setContrast: (value: number) => void;
    setDotSize: (value: number) => void;
    setGridSize: (value: number) => void;
    setLinearAngle: (value: number) => void;
    setIsAutoRotating: (value: boolean) => void;
    setOpacity: (value: number) => void;
    setSpeed: (value: number) => void;
    setDotColor: (value: string) => void;
    setBackgroundColor: (value: string) => void;
    setGradientColor: (value: string) => void;
  };
  onHide: () => void;
}

export default function HalftoneControls({ params, controls, onHide }: HalftoneControlsProps) {
  return (
    <div className="fixed top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg max-w-sm z-50 max-h-[calc(100vh-2rem)] overflow-y-auto">
      <div className="p-6">
      {/* Header with Hide button */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">Halftone Controls</h1>
        <button
          onClick={onHide}
          className="px-3 py-1 bg-gray-500 text-white rounded text-sm font-medium hover:bg-gray-600 ml-4 cursor-pointer"
        >
          Hide
        </button>
      </div>
        
      <Slider
        label={`Blur: ${params.blur}px`}
        value={params.blur}
        min={0}
        max={10}
        step={0.1}
        onChange={controls.setBlur}
      />

      <Slider
        label={`Contrast: ${params.contrast}`}
        value={params.contrast}
        min={0}
        max={100}
        step={1}
        onChange={controls.setContrast}
      />

      <Slider
        label={`Dot Size: ${params.dotSize}px`}
        value={params.dotSize}
        min={0}
        max={30}
        step={0.1}
        onChange={controls.setDotSize}
      />

      <Slider
        label={`Grid Size: ${params.gridSize}px`}
        value={params.gridSize}
        min={0}
        max={30}
        step={0.1}
        onChange={controls.setGridSize}
      />

      {/* Linear Gradient Angle Slider with Auto button */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-black">
            Angle: {params.linearAngle}°
          </label>
          <button
            onClick={() => controls.setIsAutoRotating(!params.isAutoRotating)}
            className={`px-2 py-1 rounded text-xs font-medium cursor-pointer ${
              params.isAutoRotating 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {params.isAutoRotating ? 'Stop' : 'Auto'}
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          step="1"
          value={params.linearAngle}
          onChange={(e) => controls.setLinearAngle(parseInt(e.target.value))}
          disabled={params.isAutoRotating}
          className={`w-full h-2 bg-gray-200 rounded-lg appearance-none ${
            params.isAutoRotating ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          }`}
        />
      </div>

      <Slider
        label={`Speed: ${params.speed}`}
        value={params.speed}
        min={1}
        max={100}
        step={1}
        onChange={controls.setSpeed}
        disabled={!params.isAutoRotating}
      />

      <Slider
        label={`Opacity: ${params.opacity}`}
        value={params.opacity}
        min={0}
        max={1}
        step={0.01}
        onChange={controls.setOpacity}
      />

      {/* Color Controls */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-2">
          Dot Color
        </label>
        <input
          type="color"
          value={params.dotColor}
          onChange={(e) => controls.setDotColor(e.target.value)}
          className="w-full h-10 rounded border border-gray-300 cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-2">
          Background Color
        </label>
        <input
          type="color"
          value={params.backgroundColor}
          onChange={(e) => controls.setBackgroundColor(e.target.value)}
          className="w-full h-10 rounded border border-gray-300 cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-black mb-2">
          Gradient Color
        </label>
        <input
          type="color"
          value={params.gradientColor}
          onChange={(e) => controls.setGradientColor(e.target.value)}
          className="w-full h-10 rounded border border-gray-300 cursor-pointer"
        />
      </div>
    </div>
    </div>
  );
} 