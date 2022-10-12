import Box from "@mui/material/Box";
import NoResultsImage from "assets/rick-face.png";
import React from "react";

const NoResults = () => (
  <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
    <h2 style={{ textAlign: "center" }}>No results</h2>
    <img src={NoResultsImage} height="300px" alt="no result" />
  </Box>
);

export default NoResults;
