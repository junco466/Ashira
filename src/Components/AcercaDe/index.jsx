import React from "react";
import separador from "../../assets/svg/separador.svg";
import fotoAcercaDe from "../../assets/images/acerca_de.png";

import "./AcercaDe.css";

const AcercaDe = () => {
  return (
    <figure>
      <img className="w-fit mb-6" src={separador} alt="description-separador" />
      <div className="p-1 acerca-de-container">
        <div className="text-container">
          <span className="text-3xl acerca-de-title">
            Acerca de <br />
          </span>
          <span className="text-3xl font-bold acerca-de-title">
            Amparo Sanchez
          </span>
          <p className="description-p text-2xl w-96">
            Maestra Reiki, Facilitadora de vida Sensum, Terapeuta Holistica
            experta en terapias cuerpo-mente, haciendo acompañamiento espiritual
            para encontrar un equilibrio y bienestar a nivel físico, emocional,
            mental y espiritual.
          </p>
        </div>
        <div className="description-img mt-5 mb-5">
          <img
            className="w-full h-full object-cover amparo-image"
            src={fotoAcercaDe}
            alt="Amparo Sanchez"
          />
        </div>
        <div className="w-full mt-5">
          <button className="acerca-de-button">
            Mas de 10 años de experiencia
          </button>
        </div>
      </div>
    </figure>
  );
};

export default AcercaDe;
