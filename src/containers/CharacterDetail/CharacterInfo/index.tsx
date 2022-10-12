import Box from "@mui/material/Box";
import React from "react";
import { CharacterType } from "utils/types";

interface Props {
  character: CharacterType;
}

const CharacterInfo: React.FC<Props> = ({ character }) => {
  return (
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
  );
};

export default CharacterInfo;
