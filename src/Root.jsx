
import React from "react";
import {
  Composition,
  useCurrentFrame,
} from "remotion";

const Character = () => {
  const frame = useCurrentFrame();

  const swing = Math.sin(frame * 0.15) * 25;
  const bounce = Math.abs(Math.sin(frame * 0.15)) * 12;

  return (
    <g transform={`translate(960 ${540 - bounce})`}>
      {/* Head */}
      <circle cx="0" cy="-180" r="65" fill="#F2C49B" />
      
      {/* Hair */}
      <path
        d="M-62 -195 Q-50 -270 15 -245 Q65 -245 65 -190"
        fill="#20202A"
      />

      {/* Eyes */}
      <circle cx="-22" cy="-185" r="6" fill="#20202A" />
      <circle cx="22" cy="-185" r="6" fill="#20202A" />

      {/* Body */}
      <rect
        x="-48"
        y="-110"
        width="96"
        height="150"
        rx="25"
        fill="#D4AF37"
      />

      {/* Left Arm */}
      <g transform={`rotate(${swing} -45 -90)`}>
        <rect
          x="-60"
          y="-95"
          width="22"
          height="115"
          rx="11"
          fill="#F2C49B"
        />
      </g>

      {/* Right Arm */}
      <g transform={`rotate(${-swing} 45 -90)`}>
        <rect
          x="38"
          y="-95"
          width="22"
          height="115"
          rx="11"
          fill="#F2C49B"
        />
      </g>

      {/* Left Leg */}
      <g transform={`rotate(${-swing} -22 40)`}>
        <rect
          x="-38"
          y="35"
          width="32"
          height="115"
          rx="12"
          fill="#263B75"
        />
      </g>

      {/* Right Leg */}
      <g transform={`rotate(${swing} 22 40)`}>
        <rect
          x="6"
          y="35"
          width="32"
          height="115"
          rx="12"
          fill="#263B75"
        />
      </g>
    </g>
  );
};

const MainAnimation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(#101014, #25243A)",
        overflow: "hidden",
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1920 1080">
        <Character />
        <text
          x="960"
          y="850"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="52"
          fontWeight="bold"
        >
          CHARACTER ANIMATION ENGINE
        </text>
      </svg>
    </div>
  );
};

export const RemotionRoot = () => (
  <Composition
    id="Main"
    component={MainAnimation}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
  />
);

        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
