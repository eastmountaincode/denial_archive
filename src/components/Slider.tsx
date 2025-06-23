interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  className?: string;
}

export default function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  disabled = false,
  className = ""
}: SliderProps) {
  const handleDecrement = () => {
    const newValue = Math.max(min, value - step);
    onChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, value + step);
    onChange(newValue);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-black mb-2">
        {label}
      </label>
      
      <div className="flex items-center gap-3">
        {/* Decrement button */}
        <button
          onClick={handleDecrement}
          disabled={disabled || value <= min}
          className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium transition-colors ${
            disabled || value <= min
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
          }`}
        >
          −
        </button>

        {/* Slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          disabled={disabled}
          className={`flex-1 h-2 bg-gray-200 rounded-lg appearance-none ${
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          } ${className}`}
        />

        {/* Increment button */}
        <button
          onClick={handleIncrement}
          disabled={disabled || value >= max}
          className={`w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-sm font-medium transition-colors ${
            disabled || value >= max
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
} 