
import React from "react";
import {
  Composition,
  useCurrentFrame,
} from "remotion";

import { Character } from "./Character";

const MainAnimation = () => {
  const frame = useCurrentFrame();

  const bounce =
    Math.abs(Math.sin(frame * 0.15)) * 12;

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
          width: 550,
          height: 650,
          transform: `translateY(${-bounce}px)`,
        }}
      >
        <Character
          skin="#F2C49B"
          hair="#20202A"
          outfit="#D4AF37"
          pants="#263B75"
          expression="happy"
        />
      </div>

      <div
        style={{
          color: "#D4AF37",
          fontSize: 48,
          fontWeight: "bold",
        }}
      >
        CHARACTER DESIGN STUDIO
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
