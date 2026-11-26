
import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export const Character = ({
  skin = "#F2C49B",
  hair = "#20202A",
  outfit = "#D4AF37",
  pants = "#263B75",
  expression = "happy",
  speaking = true,
}) => {
  const frame = useCurrentFrame();

  const walk = Math.sin(frame * 0.12);
  const bounce = Math.abs(Math.sin(frame * 0.12)) * 8;
  const armSwing = walk * 25;
  const legSwing = walk * 22;
  const headTilt = Math.sin(frame * 0.06) * 3;

  const blink = frame % 90 < 5;
  const mouthOpen = Math.floor(frame / 6) % 2 === 0;

  return (
    <svg viewBox="0 0 400 600" width="100%" height="100%">
      {/* Legs */}
      <g transform={`translate(0 ${bounce})`}>
        <g transform={`rotate(${legSwing} 160 420)`}>
          <rect x="135" y="420" width="55" height="130" rx="18" fill={pants}/>
          <ellipse cx="160" cy="555" rx="40" ry="18" fill="#20202A"/>
        </g>
        <g transform={`rotate(${-legSwing} 240 420)`}>
          <rect x="210" y="420" width="55" height="130" rx="18" fill={pants}/>
          <ellipse cx="240" cy="555" rx="40" ry="18" fill="#20202A"/>
        </g>
      </g>

      {/* Arms */}
      <g transform={`translate(0 ${bounce})`}>
        <g transform={`rotate(${-armSwing} 90 280)`}>
          <rect x="65" y="275" width="45" height="150" rx="20" fill={skin}/>
        </g>
        <g transform={`rotate(${armSwing} 310 280)`}>
          <rect x="290" y="275" width="45" height="150" rx="20" fill={skin}/>
        </g>
      </g>

      {/* Body */}
      <g transform={`translate(0 ${bounce})`}>
        <rect x="115" y="260" width="170" height="170" rx="35" fill={outfit}/>
      </g>

      {/* Head */}
      <g transform={`rotate(${headTilt} 200 165)`}>
        <path d="M110 145 Q100 35 200 45 Q300 35 290 145 L280 190 L120 190 Z" fill={hair}/>
        <circle cx="200" cy="165" r="85" fill={skin}/>

        {blink ? (
          <>
            <path d="M145 155 Q165 155 185 155" stroke="#20202A" strokeWidth="8" fill="none"/>
            <path d="M215 155 Q235 155 255 155" stroke="#20202A" strokeWidth="8" fill="none"/>
          </>
        ) : (
          <>
            <circle cx="165" cy="155" r="10" fill="#20202A"/>
            <circle cx="235" cy="155" r="10" fill="#20202A"/>
          </>
        )}

        <path d="M145 130 Q165 118 185 130" stroke="#20202A" strokeWidth="6" fill="none"/>
        <path d="M215 130 Q235 118 255 130" stroke="#20202A" strokeWidth="6" fill="none"/>

        <g stroke="#20202A" strokeWidth="7" fill="none" strokeLinecap="round">
          {expression === "sad" ? (
            <path d="M165 225 Q200 190 235 225"/>
          ) : expression === "angry" ? (
            <path d="M170 215 L230 215"/>
          ) : speaking && mouthOpen ? (
            <ellipse cx="200" cy="215" rx="17" ry="20"/>
          ) : (
            <path d="M165 205 Q200 235 235 205"/>
          )}
        </g>
      </g>
    </svg>
  );
};
