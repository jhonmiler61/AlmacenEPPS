import React from "react";
import "./EstiloComponentes/Buscar.css";
export default function Buscar() {
  return (
    <div className="Buscar">
      <h2>Almacen EPPS</h2>
      <p>Buscar:</p>
      <input type="text" />
      <button>Buscar Producto</button>
    </div>
  );
}
