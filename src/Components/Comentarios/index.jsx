import React from "react";
import parse from "html-react-parser";

import "./Comentarios.css";

const Comentarios = ({ comments }) => {
  return (
    <figure className="comments-figure">
      <h1 className="comments-h1">{parse(comments.nombre)}</h1>
      <p className="comments-p">{parse(comments.contenido)}</p>
      <p className="fecha-p">
        hace <span>{parse(comments.fecha)}</span> meses
      </p>
    </figure>
  );
};

export default Comentarios;
