
import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const Transition = ({ children, duration = 30 }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, duration, 150 - duration, 150],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [0, duration, 150],
    [1.08, 1, 1.04],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        opacity,
        transform: `scale(${scale})`,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};
