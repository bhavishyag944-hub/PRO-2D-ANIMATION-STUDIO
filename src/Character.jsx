
import React from "react";
import { useCurrentFrame } from "remotion";

export const Character = ({
  skin = "#F2C49B",
  hair = "#20202A",
  outfit = "#D4AF37",
  pants = "#263B75",
  expression = "happy",
  speaking = true,
}) => {
  const frame = useCurrentFrame();

  // Automatic eye blinking
  const blink = frame % 90 < 5;

  // Animated mouth shapes
  const mouthFrame = Math.floor(frame / 6) % 4;

  const mouthShapes = [
    <path d="M165 205 Q200 235 235 205" />,
    <ellipse cx="200" cy="215" rx="20" ry="10" />,
    <ellipse cx="200" cy="215" rx="14" ry="22" />,
    <path d="M170 215 Q200 200 230 215" />,
  ];

  const mouth = speaking
    ? mouthShapes[mouthFrame]
    : <path d="M165 205 Q200 235 235 205" />;

  return (
    <svg viewBox="0 0 400 600" width="100%" height="100%">
      {/* Hair */}
      <path
        d="M110 145 Q100 35 200 45 Q300 35 290 145 L280 190 L120 190 Z"
        fill={hair}
      />

      {/* Face */}
      <circle cx="200" cy="165" r="85" fill={skin} />

      {/* Eyes */}
      {blink ? (
        <>
          <path d="M145 155 Q165 155 185 155" stroke="#20202A" strokeWidth="8" fill="none" />
          <path d="M215 155 Q235 155 255 155" stroke="#20202A" strokeWidth="8" fill="none" />
        </>
      ) : (
        <>
          <circle cx="165" cy="155" r="10" fill="#20202A" />
          <circle cx="235" cy="155" r="10" fill="#20202A" />
        </>
      )}

      {/* Eyebrows */}
      <path d="M145 130 Q165 118 185 130" stroke="#20202A" strokeWidth="6" fill="none" />
      <path d="M215 130 Q235 118 255 130" stroke="#20202A" strokeWidth="6" fill="none" />

      {/* Mouth */}
      <g
        stroke="#20202A"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      >
        {expression === "sad"
          ? <path d="M165 225 Q200 190 235 225" />
          : expression === "angry"
          ? <path d="M170 215 L230 215" />
          : mouth}
      </g>

      {/* Body */}
      <rect x="115" y="260" width="170" height="170" rx="35" fill={outfit} />

      {/* Arms */}
      <rect x="65" y="275" width="45" height="150" rx="20" fill={skin} />
      <rect x="290" y="275" width="45" height="150" rx="20" fill={skin} />

      {/* Legs */}
      <rect x="135" y="420" width="55" height="130" rx="18" fill={pants} />
      <rect x="210" y="420" width="55" height="130" rx="18" fill={pants} />

      {/* Shoes */}
      <ellipse cx="160" cy="555" rx="40" ry="18" fill="#20202A" />
      <ellipse cx="240" cy="555" rx="40" ry="18" fill="#20202A" />
    </svg>
  );
};
