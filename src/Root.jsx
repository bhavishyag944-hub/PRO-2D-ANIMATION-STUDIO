import React from "react";
import { Composition } from "remotion";

const MainAnimation = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#101014",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#D4AF37",
        fontSize: 64,
        fontWeight: "bold",
      }}
    >
      2D ANIMATION STUDIO
    </div>
  );
};

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="Main"
        component={MainAnimation}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
