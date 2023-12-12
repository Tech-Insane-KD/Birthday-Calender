import React from "react";
import "./App.css";
import Birthday from "./components/Birthday";
import { Route, Switch } from "react-router-dom";
import RouterBirthday from "./components/RouterBirthday";
import Generate from "./components/Generate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Birthday} />
        <Route
          exact
          path="/birthday/:name?/:day?/:month?"
          component={RouterBirthday}
        />
        <Route exact path="/generate" component={Generate} />
      </Switch>
    </div>
  );
}

export default App;
