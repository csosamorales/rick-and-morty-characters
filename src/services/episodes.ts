import { EpisodeData } from "utils/types";
import { client } from "./client";

export const getEpisode = (episodeId: number) => {
  return client.get(`/episode/${episodeId}`).then((response) => {
    return {
      id: response.data.id,
      name: response.data.name,
      airDate: response.data.air_date,
      episode: response.data.episode,
    } as EpisodeData;
  });
};
