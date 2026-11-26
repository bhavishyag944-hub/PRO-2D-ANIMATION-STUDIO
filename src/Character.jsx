
import React from "react";

export const Character = ({
  skin = "#F2C49B",
  hair = "#20202A",
  outfit = "#D4AF37",
  pants = "#263B75",
  expression = "happy",
}) => {
  const eyes = () => {
    if (expression === "sad") {
      return (
        <>
          <path d="M145 155 Q165 140 185 155" stroke="#20202A" strokeWidth="8" fill="none" />
          <path d="M215 155 Q235 140 255 155" stroke="#20202A" strokeWidth="8" fill="none" />
        </>
      );
    }

    if (expression === "angry") {
      return (
        <>
          <path d="M140 135 L185 155" stroke="#20202A" strokeWidth="10" />
          <path d="M260 135 L215 155" stroke="#20202A" strokeWidth="10" />
          <circle cx="165" cy="165" r="9" fill="#20202A" />
          <circle cx="235" cy="165" r="9" fill="#20202A" />
        </>
      );
    }

    if (expression === "surprised") {
      return (
        <>
          <circle cx="165" cy="155" r="17" fill="white" />
          <circle cx="235" cy="155" r="17" fill="white" />
          <circle cx="165" cy="155" r="8" fill="#20202A" />
          <circle cx="235" cy="155" r="8" fill="#20202A" />
        </>
      );
    }

    return (
      <>
        <circle cx="165" cy="155" r="10" fill="#20202A" />
        <circle cx="235" cy="155" r="10" fill="#20202A" />
      </>
    );
  };

  const mouth = () => {
    switch (expression) {
      case "sad":
        return <path d="M165 225 Q200 185 235 225" />;
      case "angry":
        return <path d="M170 215 L230 215" />;
      case "surprised":
        return <ellipse cx="200" cy="215" rx="17" ry="25" />;
      default:
        return <path d="M165 195 Q200 245 235 195" />;
    }
  };

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
      {eyes()}

      {/* Mouth */}
      <g
        stroke="#20202A"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      >
        {mouth()}
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
