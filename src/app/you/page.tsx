"use client";

import { useState } from "react";
import { useHalftone } from "../../hooks/useHalftone";
import HalftoneBackground from "../../components/HalftoneBackground";
import HalftoneControls from "../../components/HalftoneControls";
import YouPageContent from "../../components/YouPageContent";

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


    </div>
  );
} 