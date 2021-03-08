import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="nav">
      <Link to="/Buscar">Buscar</Link>
      <Link to="/EntradaEPPS">EntradaEPPS</Link>
      <Link to="/SalidaEPPS">SalidaEPPS</Link>
      <Link to="/StockEPPS">StockEPPS</Link>
    </nav>
  );
}
