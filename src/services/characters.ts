import { client } from "./client";

export const getCharacters = (
  name: string = "",
  status: string = "",
  gender: string = "",
  page: number
) => {
  const url = `/character?page=${page}${name !== "" ? `&name=${name}` : ""}${
    status !== "" ? `&status=${status}` : ""
  }${gender !== "" ? `&gender=${gender}` : ""}`;
  return client
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getCharacter = (id: string) => {
  return client
    .get(`/character/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
