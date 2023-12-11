import React from "react";

const Curriculum = () => {
  return (
    <div>
      <h1 className="titulos">Curriculum</h1>
      <hr />
      <h2>Estudios</h2>
      <ul>
        <li>
          <strong>UNIVERSIDAD AUTONOMA DE ENTRE RIOS</strong>
          <br></br>
          Carrera de Administración de Empresas, en curso. (2019 - Actualidad)
        </li>
        <li>
          <strong>UNIVERSIDAD DE CONCEPCION DEL URUGUAY</strong>
          <br></br>
          Carrera de Licenciatura en Nutrición, no completada. (2012 - 2018)
        </li>
        <li>
          <strong>ESCUELA SECUNDARIA COLEGIO DON BOSCO</strong>
          <br></br>
          Bachiller Mercantil. (2004 - 2009)
        </li>
      </ul>
      <h2>Idioma</h2>
      <ul>
        <li>
          <strong>Instituto Step English Language Center</strong>
          <br />
          Ciclo de estudios superiores. (2005 - 2010)
        </li>
      </ul>
      <h1>Certificaciones y Capacitación</h1>
      <ul>
        <li>
          <strong>Facultad de Ciencias Economicas.</strong>
          <br />
          Sistema de Formacion Profesional y Capacitacion Laboral. <br />
          Curso Asistente Administrativo Contable. (2022)
        </li>
        <li>
          <strong> Leiva Marlene </strong>
          <br />
          Jornada de Liquidacion de Sueldos (2020)
        </li>
        <li>
          <strong>
            {" "}
            Secretaria de Producción del Gobierno de la Ciudad de Santa Fe{" "}
          </strong>
          <br />
          Jornadas de Alimentación Saludable (2013)
        </li>
        <li>
          <strong>Forum</strong>
          <br />
          Informática Administrativa en Servicios de Salud (2012)
          <br />
          Atención y Contención al Paciente (2012)
          <br />
          ·Secretariado de Consultorios Médicos perteneciente al Diplomado en
          Secretariado Medico y Empresas de Salud (2011)
        </li>
        <li>
          <strong>Agencia Santafecina de Seguridad Alimentaria.</strong>
          <br />
          Curso de Manipulación Higiénica de los Alimentos (2011)
        </li>
      </ul>
    </div>
  );
};

export default Curriculum;
