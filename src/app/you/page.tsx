"use client";

import { useState } from "react";
import { useHalftone } from "../../hooks/useHalftone";
import HalftoneBackground from "../../components/HalftoneBackground";
import HalftoneControls from "../../components/HalftoneControls";
import YouPageContent from "../../components/YouPageContent";
import DebugInfo from "../../components/DebugInfo";

export default function YouPage() {
  const { params, controls } = useHalftone();
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Halftone background layer */}
      <HalftoneBackground params={params} />
      
      {/* Main content layer */}
      <div className="relative z-10">
        <YouPageContent />
      </div>

      {/* Controls overlay panel (z-index: 50) */}
      {showControls && (
        <div className="relative z-60">
          <HalftoneControls
            params={params}
            controls={controls}
            onHide={() => setShowControls(false)}
          />
        </div>
      )}

      {/* Show Controls button (z-index: 40) */}
      {!showControls && (
        <button
          onClick={() => setShowControls(true)}
          className="fixed top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black/80 backdrop-blur-sm z-40 cursor-pointer"
        >
          Show Controls
        </button>
      )}

      {/* Debug info (temporary) */}
      <DebugInfo params={params} />
    </div>
  );
} 