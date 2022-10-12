import React from "react";
import Container from "@mui/material/Container";
import NavBar from "components/navbar";
import Main from "components/main";
import ListCharacters from "components/list-characters";

function App() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <Main />
      </Container>
    </>
  );
}

export default App;
