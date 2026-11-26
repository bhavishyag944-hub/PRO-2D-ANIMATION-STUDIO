
import React from "react";
import { Composition, useCurrentFrame } from "remotion";
import { Character } from "./Character";

const characters = [
  {
    name: "ROYAL",
    skin: "#F2C49B",
    hair: "#20202A",
    outfit: "#D4AF37",
    pants: "#263B75",
    expression: "happy",
  },
  {
    name: "WARRIOR",
    skin: "#C98B62",
    hair: "#171717",
    outfit: "#9B2929",
    pants: "#252525",
    expression: "angry",
  },
  {
    name: "HERO",
    skin: "#E8B98F",
    hair: "#542C19",
    outfit: "#247A55",
    pants: "#263B75",
    expression: "neutral",
  },
  {
    name: "CARTOON",
    skin: "#F5D0A9",
    hair: "#49306B",
    outfit: "#4776D0",
    pants: "#303044",
    expression: "happy",
  },
];

const MainAnimation = () => {
  const frame = useCurrentFrame();
  const bounce = Math.abs(Math.sin(frame * 0.15)) * 10;

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
      <h1
        style={{
          color: "#D4AF37",
          fontSize: 65,
          margin: 20,
        }}
      >
        CHARACTER CUSTOMIZATION
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 25,
          width: "95%",
          height: 650,
        }}
      >
        {characters.map((character, index) => (
          <div
            key={character.name}
            style={{
              width: 390,
              height: 560,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff08",
              border: "2px solid #D4AF3744",
              borderRadius: 25,
              padding: 10,
            }}
          >
            <div
              style={{
                width: "100%",
                height: 470,
                transform: `translateY(${
                  Math.sin(frame * 0.15 + index) * bounce
                }px)`,
              }}
            >
              <Character {...character} />
            </div>

            <div
              style={{
                color: "#D4AF37",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {character.name}
            </div>
          </div>
        ))}
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
