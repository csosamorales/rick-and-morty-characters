export type CharacterType = {
  image: string;
  id: number;
  name: string;
  specie: string;
  status: string;
  type: string;
  gender: string;
  origin: string;
  created: string;
  episodes: Array<string>;
};

export type EpisodeData = {
  id: string;
  name: string;
  airDate: string;
  episode: string;
};
