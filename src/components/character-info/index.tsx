import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCharacter, getEpisodes } from "services/api-call";
import { characterInfoSelector } from "store/selectors";
import { CharacterInfo as CharacterInfoType, EpisodeData } from "utils/types";
import Episode from "./episode";
import "./styles.scss";

const CharacterInfo = () => {
  const location = useLocation();
  const params: URLSearchParams = new URLSearchParams(location.search);
  const id = params.get("id");
  const [character, setCharacter] = useState<CharacterInfoType>();
  const characterSelector: CharacterInfoType = useSelector(
    characterInfoSelector
  );
  const [episodeSelected, setEpisodeSelected] = useState(0);
  const [episodes, setEpisodes] = useState<Array<EpisodeData>>();

  const getEpisodesInfo = () => {
    character?.episodes &&
      getEpisodes(character.episodes).then((episodes) => {
        setEpisodes(episodes);
        setEpisodeSelected(parseInt(episodes[0].id));
      });
  };

  useEffect(() => {
    character?.episodes && getEpisodesInfo();
  }, [character]);

  useEffect(() => {
    if (characterSelector.id !== 0) {
      setCharacter(characterSelector);
    } else if (id !== null) {
      getCharacter(id).then((response) => {
        setCharacter({
          image: response.image,
          name: response.name,
          specie: response.species,
          status: response.status,
          id: response.id,
          type: response.type,
          gender: response.gender,
          origin: response.origin.name,
          created: new Date(response.created).toLocaleDateString(),
          episodes: response.episode,
        } as CharacterInfoType);
      });
    }
  }, [id, characterSelector]);

  const handleEpisodeChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setEpisodeSelected(newValue);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", overflowY: "scroll" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Box
          sx={{
            maxWidth: { xs: "350px", md: "none" },
            marginTop: "100px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <img
            alt="character-avatar"
            className="character__image"
            src={character?.image}
          />
          <div>
            <ul>
              <li>Name: {character?.name}</li>
              <li>Status: {character?.status}</li>
              <li>Species: {character?.specie}</li>
              <li>Type: {character?.type}</li>
              <li>Gender: {character?.gender}</li>
              <li>Origin: {character?.origin}</li>
              <li>Created: {character?.created}</li>
            </ul>
          </div>
        </Box>
        {episodes && (
          <Box sx={{ maxWidth: { md: "800px" }, padding: "0px 5px" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                overflowX: "scroll",
              }}
            >
              <Tabs
                value={episodeSelected}
                onChange={handleEpisodeChange}
                variant="scrollable"
                scrollButtons="auto"
                className="tabs__container"
              >
                {episodes.map((episode) => (
                  <Tab label={`Episode ${episode.id}`} value={episode.id} />
                ))}
              </Tabs>
            </Box>
            <Episode
              episode={episodes.find(
                (episode) => parseInt(episode.id) === episodeSelected
              )}
            />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default CharacterInfo;
