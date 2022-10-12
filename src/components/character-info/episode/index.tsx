import React from "react";
import { EpisodeData } from "utils/types";

interface Props {
  episode: EpisodeData | undefined;
}

const Episode: React.FC<Props> = ({ episode }) => {
  return (
    <>
      <ul>
        <li>ID: {episode?.id}</li>
        <li>Name: {episode?.name}</li>
        <li>Air date: {episode?.airDate}</li>
        <li>Episode: {episode?.episode}</li>
      </ul>
    </>
  );
};

export default Episode;
