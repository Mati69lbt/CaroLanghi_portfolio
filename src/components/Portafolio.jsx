import React from "react";
import { trabajos } from "../data/trabajos";

const Portafolio = () => {
  return (
    <div>
      <h1 className="titulos">Trabajos</h1>
      {trabajos.map((trabajo) => {
        return (
          <article key={trabajo.id} className="card">
            <div className="rotulo">
              <h2 className="empresa">{trabajo.empresa}</h2>
              <p className="fecha">{trabajo.fecha}</p>
            </div>
            <ul className="ul_act">
              {trabajo.Actividad.map((actividad, index) => {
                return (
                  <li className="li_act" key={index}>
                    {actividad}
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default Portafolio;
