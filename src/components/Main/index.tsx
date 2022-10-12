import CharacterInfo from "containers/CharacterDetail";
import ListCharacters from "containers/ListCharacters";
import NavBar from "components/NavBar";
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
