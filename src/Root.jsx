
import React from "react";
import { Composition, useCurrentFrame } from "remotion";
import { Character } from "./Character";

const expressions = [
  { name: "HAPPY", emoji: "😊", type: "happy", color: "#D4AF37" },
  { name: "SAD", emoji: "😢", type: "sad", color: "#4776D0" },
  { name: "ANGRY", emoji: "😠", type: "angry", color: "#D94B4B" },
  { name: "SURPRISED", emoji: "😲", type: "surprised", color: "#39A982" },
];

const MainAnimation = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(#101014, #25243A)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: "#D4AF37",
          fontSize: 62,
          fontWeight: "bold",
          marginBottom: 25,
        }}
      >
        EMOTION SHOWCASE
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 18,
          width: "96%",
        }}
      >
        {expressions.map((item, index) => {
          const bounce = Math.sin(frame * 0.12 + index) * 8;

          return (
            <div
              key={item.type}
              style={{
                width: 430,
                height: 730,
                background: "#ffffff08",
                border: `3px solid ${item.color}`,
                borderRadius: 25,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 12,
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 580,
                  transform: `translateY(${bounce}px)`,
                }}
              >
                <Character expression={item.type} />
              </div>

              <div
                style={{
                  color: item.color,
                  fontSize: 34,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                {item.emoji} {item.name}
              </div>
            </div>
          );
        })}
      </div>
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
