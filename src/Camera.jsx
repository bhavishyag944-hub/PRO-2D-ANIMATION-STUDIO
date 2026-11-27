
import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

export const Camera = ({ children }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const zoom = interpolate(
    frame,
    [0, durationInFrames],
    [1, 1.12],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const panX = Math.sin(frame * 0.025) * 25;
  const panY = Math.cos(frame * 0.02) * 12;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
