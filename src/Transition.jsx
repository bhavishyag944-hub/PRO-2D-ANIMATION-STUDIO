
import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";

export const Transition = ({ children, duration = 30 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeDuration = Math.min(
    duration,
    Math.floor(durationInFrames / 2)
  );

  const opacity = interpolate(
    frame,
    [
      0,
      fadeDuration,
      durationInFrames - fadeDuration,
      durationInFrames,
    ],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [0, durationInFrames],
    [1.08, 1.04],
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
