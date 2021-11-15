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

interface IInvoiceListProps {
    invoiceData: {
      home: string;
      catalog: string;
      logo?: string;
    };
    
}

const InvoiceData = ( props:IInvoiceListProps ) =>{
    const { home, catalog, logo } = props.invoiceData;

    return(
        <div >
                <div className="header">
                  <Link  to={home}>
                    <img  
                    src={logo}
                     width = "40"/>
                    </Link>
                  <Link to={catalog}>Poke catalog</Link>
                  </div>
                <Switch>
                  <Route exact path={home}>
                    <PokemonApp />
                  </Route>
                  <Route path={catalog}>
                    <PokeCatalog />
                  </Route>
                </Switch>
              </div>
    )
}

const App =  ()=>{
    const data = {
            home: '/',
            catalog: '/catalog',
            logo: `${Pokeball}`
    }
    return(
        <Router>
            <InvoiceData invoiceData={data} />
        </Router>
    )
}

export default App;