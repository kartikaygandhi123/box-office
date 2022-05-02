import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            This is Homepage
          </Route>
          <Route exact path="/starred">
            This is starred
          </Route>

          <Route>This Is 404 Page</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
