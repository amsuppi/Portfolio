import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PokeHistory from "./PokeHistory";
import PokemonApp from "./PokemonApp";

const App = ()=>{
     return(
            <Router>
              <div>
                  <Link to="/">Home</Link>
                  <Link to="/about">Poke history</Link>
                <hr />
                <Switch>
                  <Route exact path="/">
                    <PokemonApp />
                  </Route>
                  <Route path="/about">
                    <PokeHistory />
                  </Route>
                </Switch>
              </div>
            </Router>
         
     );
}

export default App;