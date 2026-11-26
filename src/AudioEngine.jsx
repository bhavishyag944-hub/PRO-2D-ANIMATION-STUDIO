
import React from "react";
import { Audio, Sequence } from "remotion";

export const AudioEngine = ({
  voiceSrc,
  musicSrc,
  soundSrc,
}) => {
  return (
    <>
      {voiceSrc && (
        <Sequence from={0}>
          <Audio src={voiceSrc} volume={1} />
        </Sequence>
      )}

      {musicSrc && (
        <Sequence from={0}>
          <Audio src={musicSrc} volume={0.25} />
        </Sequence>
      )}

      {soundSrc && (
        <Sequence from={0}>
          <Audio src={soundSrc} volume={0.6} />
        </Sequence>
      )}
    </>
  );
};
