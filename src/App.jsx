import React from "react";
import Auth from "./Auth";
import Landing from "./Landing";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/authenticate" component={Auth} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
