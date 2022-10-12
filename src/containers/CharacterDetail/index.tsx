import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCharacter } from "services/characters";
import { characterInfoSelector } from "store/selectors";
import { CharacterType } from "utils/types";
import CharacterInfo from "./CharacterInfo";
import "./styles.scss";
import EpisodeList from "./EpisodesList";

const CharacterDetail = () => {
  const location = useLocation();
  const params: URLSearchParams = new URLSearchParams(location.search);
  const id = params.get("id");
  const [character, setCharacter] = useState<CharacterType>();
  const characterSelector: CharacterType = useSelector(characterInfoSelector);

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
        } as CharacterType);
      });
    }
  }, [id, characterSelector]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", overflowY: "scroll" }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        {character && <CharacterInfo character={character} />}
        {character && <EpisodeList episodesUrl={character.episodes} />}
      </Box>
    </div>
  );
};

export default CharacterDetail;
