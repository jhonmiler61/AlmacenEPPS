import "./styles.css";
import Menu from "./Componentes/Menu";
import "./Componentes/EstiloComponentes/Menu.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Buscar from "./Componentes/Buscar";
import EntradaEPPS from "./Componentes/EntradaEPPS";
import SalidaEPPS from "./Componentes/SalidaEPPS";
import StockEPPS from "./Componentes/StockEPPS";
import Error404 from "./Componentes/Error404";

import React from "react";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route path="/" exact component={Buscar} />
            <Route path="/Buscar" exact component={Buscar} />
            <Route path="/EntradaEPPS" exact component={EntradaEPPS} />
            <Route path="/SalidaEPPS" exact component={SalidaEPPS} />
            <Route path="/StockEPPS" exact component={StockEPPS} />
            <Route path="/404" exact component={Error404} />
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
