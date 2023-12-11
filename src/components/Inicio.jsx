import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Mi nombre es <strong>Carolina Langhi</strong>, nací en Paraná, Entre
        Ríos, en 1992. Ofrezco servicios para empresas y me encuentro en
        constante evolución con el objetivo de proporcionar una mejor calidad de
        servicio.
      </h1>
      <h2>
        En mi papel como estudiante de{" "}
        <strong>Administración de Empresas</strong>, me defino como una persona
        responsable y ordenada, siempre en búsqueda de oportunidades que me
        permitan expandir mis horizontes y adquirir nuevas habilidades en un
        entorno desafiante y dinámico.
      </h2>
      <h2>
        Mi interés se extiende a explorar oportunidades laborales que se alineen
        con mi formación y habilidades. Estoy abierta a discutir colaboraciones
        y proyectos, donde podamos dialogar sobre las necesidades de su empresa
        y cómo puedo aportar con mis servicios. Si están interesados en conocer
        más sobre lo que puedo ofrecer, los invito a ponerse en contacto
        conmigo. Estoy disponible para una conversación constructiva y espero
        con entusiasmo la posibilidad de colaborar juntos. Pueden comunicarse
        conmigo a través del siguiente <Link to="/contacto">Contacto</Link>.
      </h2>
    </div>
  );
};

export default Inicio;
