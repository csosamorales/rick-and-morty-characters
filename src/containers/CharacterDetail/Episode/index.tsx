import React, { useEffect, useState } from "react";
import { getEpisode } from "services/episodes";
import { EpisodeData } from "utils/types";

interface Props {
  episodeId: number;
}

const Episode: React.FC<Props> = ({ episodeId }) => {
  const [episode, setEpisode] = useState<EpisodeData>();
  useEffect(() => {
    episodeId && getEpisode(episodeId).then((reponse) => setEpisode(reponse));
  });

  return (
    <>
      {episode && (
        <ul>
          <li>ID: {episode?.id}</li>
          <li>Name: {episode?.name}</li>
          <li>Air date: {episode?.airDate}</li>
          <li>Episode: {episode?.episode}</li>
        </ul>
      )}
    </>
  );
};

export default Episode;
