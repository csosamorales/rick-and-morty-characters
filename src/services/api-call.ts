import axios from "axios";
import { EpisodeData } from "utils/types";
import { client } from "./client";

const url = "https://rickandmortyapi.com/api";

export const getCharacters = (
  name: string = "",
  status: string = "",
  gender: string = "",
  page: number
) => {
  console.log("name", name);
  let urlBase = new URL(
    `${url}/character?page=${page}${name !== "" ? `&name=${name}` : ""}${
      status !== "" ? `&status=${status}` : ""
    }${gender !== "" ? `&gender=${gender}` : ""}`
  );
  return client
    .get(urlBase.toString())
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getCharacter = (id: string) => {
  return client
    .get(`${url}/character/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getEpisodes = (episodesUrls: Array<string>) => {
  const requests = episodesUrls.map((endpoint) => client.get(endpoint));
  return axios
    .all(requests)
    .then(
      axios.spread((...res) =>
        res.map((response) => {
          return {
            id: response.data.id,
            name: response.data.name,
            airDate: response.data.air_date,
            episode: response.data.episode,
          } as EpisodeData;
        })
      )
    )
    .catch((error) => {
      throw error;
    });
};
