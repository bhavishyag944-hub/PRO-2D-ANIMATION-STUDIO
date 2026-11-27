
import React from "react";
import { useCurrentFrame } from "remotion";

export const Background = () => {
  const frame = useCurrentFrame();

  const cloudMove = (frame * 1.2) % 2200;
  const sunPulse = 1 + Math.sin(frame * 0.04) * 0.04;
  const birdMove = Math.sin(frame * 0.08) * 12;

  return (
    <svg
      viewBox="0 0 1920 1080"
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        inset: 0,
      }}
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#142B55" />
          <stop offset="100%" stopColor="#F5A45D" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="1920" height="1080" fill="url(#sky)" />

      {/* Sun */}
      <circle
        cx="1500"
        cy="230"
        r={105 * sunPulse}
        fill="#FFD477"
        opacity="0.9"
      />

      {/* Clouds */}
      {[0, 1, 2].map((item) => (
        <g
          key={item}
          transform={`translate(${(cloudMove + item * 750) % 2200 - 250}, ${160 + item * 90})`}
          fill="#FFFFFF"
          opacity="0.75"
        >
          <ellipse cx="0" cy="0" rx="100" ry="35" />
          <ellipse cx="65" cy="-20" rx="65" ry="45" />
          <ellipse cx="-60" cy="-15" rx="60" ry="40" />
        </g>
      ))}

      {/* Mountains */}
      <path
        d="M0 700 L350 390 L700 700 L1050 420 L1450 710 L1750 440 L1920 650 L1920 1080 L0 1080 Z"
        fill="#344B68"
      />

      {/* Hills */}
      <path
        d="M0 790 Q400 620 800 790 T1600 790 T2400 790 L2400 1080 L0 1080 Z"
        fill="#294D46"
      />

      {/* Ground */}
      <rect
        x="0"
        y="850"
        width="1920"
        height="230"
        fill="#315A3C"
      />

      {/* Trees */}
      {[150, 420, 1680, 1840].map((x, i) => (
        <g key={i} transform={`translate(${x} 0)`}>
          <rect
            x="-12"
            y="740"
            width="24"
            height="150"
            fill="#543C2C"
          />
          <circle cx="0" cy="710" r="65" fill="#1E593B" />
          <circle cx="-35" cy="745" r="42" fill="#286C42" />
          <circle cx="35" cy="745" r="42" fill="#286C42" />
        </g>
      ))}

      {/* Birds */}
      <g
        transform={`translate(750 ${300 + birdMove})`}
        stroke="#20202A"
        strokeWidth="7"
        fill="none"
      >
        <path d="M0 0 Q25 -25 50 0 Q75 -25 100 0" />
        <path d="M130 35 Q150 15 170 35 Q190 15 210 35" />
      </g>
    </svg>
  );
};
