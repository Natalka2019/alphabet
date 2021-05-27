import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Employees } from "./pages";
import "./App.scss";

function App() {
  return (
    <Router basename="/alphabet">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
