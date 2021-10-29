import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PokeCatalog from "./PokeCatalog";
import PokemonApp from "./PokemonApp";
import Pokeball from "./img/pokeball.png";

const App = ()=>{
     return(
            <Router>
              <div >
                <div className="header">
                  <Link  to="/">
                    <img  
                     src={Pokeball}
                     width = "40"/>
                    </Link>
                  <Link to="/catalog">Poke catalog</Link>
                  </div>
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