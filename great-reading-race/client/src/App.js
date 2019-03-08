import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Other from "./pages/Other";
import PageTwo from "./pages/Page2";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Library from "./pages/Library";
import PageThree from "./pages/Page3";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/book/:id" component={Other} />
          <Route exact path="/pagetwo" component={PageTwo} />
          <Route exact path="/pagethree" component={PageThree} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
