
import React from "react";
import { Composition, useCurrentFrame } from "remotion";
import { Character } from "./Character";
import { Background } from "./Background";
import { Camera } from "./Camera";
import { AudioEngine } from "./AudioEngine";

const MainAnimation = () => {
  const frame = useCurrentFrame();
  const bounce = Math.sin(frame * 0.12) * 10;

  return (
    <Camera>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Background />

        <div
          style={{
            position: "absolute",
            width: 650,
            height: 900,
            bottom: -40,
            left: "50%",
            transform: `translateX(-50%) translateY(${bounce}px)`,
            zIndex: 2,
          }}
        >
          <Character expression="happy" speaking={true} />
        </div>

        <div
          style={{
            position: "absolute",
            top: 45,
            width: "100%",
            textAlign: "center",
            color: "#FFD477",
            fontSize: 55,
            fontWeight: "bold",
            zIndex: 3,
          }}
        >
          2D ANIMATION STUDIO
        </div>

        {/* Audio Engine - MP3 files can be added later */}
        <AudioEngine />
      </div>
    </Camera>
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
