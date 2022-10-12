import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";
import { CharacterInfo } from "utils/types";
import { useDispatch } from "react-redux";
import { setCharacterInfo } from "store/actions";

interface Props {
  character: CharacterInfo;
}

const CardCharacter: React.FC<Props> = ({ character }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Card
      sx={{
        width: { xs: 250, md: 250 },
        marginBottom: 5,
        display: { md: "inline-block" },
        marginRight: { md: 5 },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%" } }}
          image={character.image}
          alt="avatar"
        />
        <CardContent sx={{ height: "150px" }}>
          <ul style={{ paddingLeft: "15px" }}>
            <li>Name: {character.name}</li>
            <li>Specie: {character.specie}</li>
            <li>Status: {character.status}</li>
          </ul>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ justifyContent: "center", backgroundColor: "#e4e4e4" }}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(setCharacterInfo(character));
            history.push(`/character?id=${character.id}`);
          }}
        >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardCharacter;
