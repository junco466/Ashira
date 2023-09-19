import React from "react";
import DescriptionCard from "../../Components/DescriptionCard";
import ServiceCard from "../../Components/ServiceCard";
import Hero from "../../Components/Hero";
import AcercaDe from "../../Components/AcercaDe";
import ComentariosContainer from "../../Components/ComentariosContainer";
import { services } from "../../db/Services";

import "./Home.css";
import { Mapa } from "../../Components/Mapa";

function Home() {
  return (
    <>
      <section className=" relative hero-section w-full">
        <Hero />
      </section>

      <section className="services-cards mb-40">
        <div className="div-services-cards grid grid-cols-3 gap-1">
          {services.map((service) => (
            <ServiceCard service={service} key={`service-card-${service.id}`} />
          ))}
        </div>
      </section>

      <section className="w-3/4 mb-20" id="acerca_de">
        <AcercaDe />
      </section>

      <section className="w-3/4 mb-20" id="servicios">
        <div className="service-section w-full items-center">
          {services.map((service) => (
            <DescriptionCard service={service} key={`service-${service.id}`} />
          ))}
        </div>
      </section>

      <section className="comentarios w-3/4 mb-20">
        <ComentariosContainer />
      </section>

      <section className="mapa w-full mb-20">
        <Mapa />
      </section>

      {/* <div className='w-3/4' id='servicios'>
        <section className='service-section w-full items-center'>
          {services.map((service) => <DescriptionCard service={service} key={`service-${service.id}`}/>)}
        </section>
      </div> */}
    </>
  );
}

export default Home;
