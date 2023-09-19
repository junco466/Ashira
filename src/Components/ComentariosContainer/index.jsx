import React from "react";
import Comentarios from "../Comentarios";
import { comments } from "../../db/Comentarios";
import separador from "../../assets/svg/separador_2.svg";

const ComentariosContainer = () => {
  return (
    <div className="w-full items-center">
      <div className="grid grid-rows-2 grid-cols-1 justify-center content-center items-center">
        <h1 className="text-3xl font-bold m-auto">Reseñas</h1>
        <img
          className="mb-6 w-1/2 m-auto"
          src={separador}
          alt="description-separador"
        />
      </div>
      <div className="flex">
        {comments.map((comment) => (
          <Comentarios comments={comment} key={`comment-${comment.id}`} />
        ))}
      </div>
    </div>
  );
};

export default ComentariosContainer;
