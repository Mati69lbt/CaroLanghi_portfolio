import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div>
      <h1 className="titulos">Contacto</h1>
      <div className="contact">
        <div className="formulario">
          <form action="https://formspree.io/f/xdorqbnw" method="POST">
            <input type="text" placeholder="Nombre" name="nombre" />
            <input type="text" placeholder="Apellido" name="apellido" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <textarea placeholder="Motivo del Contacto" name="message" />
            <input type="submit" value="Enviar" />
          </form>
        </div>

        <div className="infoCarolina">
          <h2>Carolina Langhi</h2>
          <p> Parana, Entre Rios</p>
          <p>carolinalanghi@gmail.com</p>
          <p>
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/carolinalanghi/"}
            >
              Linkedin
            </Link>
          </p>
          <p>
            <Link target="_blank" to={"https://www.instagram.com/carolanghi"}>
              Instagram
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
