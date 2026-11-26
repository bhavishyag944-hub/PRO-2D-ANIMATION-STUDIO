
import React from "react";

export const Character = ({
  skin = "#F2C49B",
  hair = "#20202A",
  outfit = "#D4AF37",
  pants = "#263B75",
  expression = "happy",
}) => {
  return (
    <svg
      viewBox="0 0 400 600"
      width="100%"
      height="100%"
    >
      {/* Hair */}
      <path
        d="M110 145 Q100 35 200 45 Q300 35 290 145 L280 190 L120 190 Z"
        fill={hair}
      />

      {/* Face */}
      <circle cx="200" cy="165" r="85" fill={skin} />

      {/* Eyes */}
      <circle cx="168" cy="155" r="9" fill="#20202A" />
      <circle cx="232" cy="155" r="9" fill="#20202A" />

      {/* Expression */}
      {expression === "happy" ? (
        <path
          d="M165 195 Q200 235 235 195"
          stroke="#20202A"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
      ) : expression === "sad" ? (
        <path
          d="M165 220 Q200 185 235 220"
          stroke="#20202A"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M175 210 L225 210"
          stroke="#20202A"
          strokeWidth="7"
          strokeLinecap="round"
        />
      )}

      {/* Body */}
      <rect
        x="115"
        y="260"
        width="170"
        height="170"
        rx="35"
        fill={outfit}
      />

      {/* Arms */}
      <rect
        x="65"
        y="275"
        width="45"
        height="150"
        rx="20"
        fill={skin}
      />
      <rect
        x="290"
        y="275"
        width="45"
        height="150"
        rx="20"
        fill={skin}
      />

      {/* Legs */}
      <rect
        x="135"
        y="420"
        width="55"
        height="130"
        rx="18"
        fill={pants}
      />
      <rect
        x="210"
        y="420"
        width="55"
        height="130"
        rx="18"
        fill={pants}
      />

      {/* Shoes */}
      <ellipse cx="160" cy="555" rx="40" ry="18" fill="#20202A" />
      <ellipse cx="240" cy="555" rx="40" ry="18" fill="#20202A" />
    </svg>
  );
};
