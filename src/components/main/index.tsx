import CharacterInfo from "components/character-info";
import ListCharacters from "components/list-characters";
import NavBar from "components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/character">
            <CharacterInfo />
          </Route>
          <Route path="/">
            <ListCharacters />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Main;
