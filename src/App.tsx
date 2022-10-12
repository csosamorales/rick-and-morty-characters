import React from "react";
import Container from "@mui/material/Container";
import Main from "components/Main";

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
