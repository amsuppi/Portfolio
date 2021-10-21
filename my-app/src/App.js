import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PokeCatalog from "./PokeCatalog";
import PokemonApp from "./PokemonApp";

const App = ()=>{
     return(
            <Router>
              <div>
                  <Link to="/">Home</Link>
                  <Link to="/catalog">Poke catalog</Link>
                <hr />
                <Switch>
                  <Route exact path="/">
                    <PokemonApp />
                  </Route>
                  <Route path="/catalog">
                    <PokeCatalog />
                  </Route>
                </Switch>
              </div>
            </Router>
         
     );
}

export default App;