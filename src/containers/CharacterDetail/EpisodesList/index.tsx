import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import Episode from "../Episode";

interface Props {
  episodesUrl: Array<string>;
}

const EpisodeList: React.FC<Props> = ({ episodesUrl }) => {
  const episodesId = episodesUrl.map((episodeUrl) =>
    parseInt(episodeUrl.split("/").slice(-1)[0])
  );
  const [episodeSelected, setEpisodeSelected] = useState(episodesId[0]);
  console.log(episodesUrl[0]);

  const handleEpisodeChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setEpisodeSelected(newValue);
  };

  return (
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
          {episodesId.map((episodesId) => (
            <Tab label={`Episode ${episodesId}`} value={episodesId} />
          ))}
        </Tabs>
      </Box>
      <Episode episodeId={episodeSelected} />
    </Box>
  );
};

export default EpisodeList;
