"use client";

import dynamic from "next/dynamic";

const ThemeAwareLightRays = dynamic(() => import("./ThemeAwareLightRays"), {
  ssr: false,
});

const MousePencilEffect = dynamic(() => import("./MousePencilEffect"), {
  ssr: false,
});

export default function BackgroundWrapper() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
        <ThemeAwareLightRays
          raysOrigin="top-center"
          raysSpeed={1.1}
          lightSpread={0.9}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.08}
          className="custom-rays"
        />
      </div>
      <MousePencilEffect />
    </>
  );
}
