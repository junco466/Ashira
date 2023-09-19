import React from "react";

export const Mapa = () => {
  return (
    <div className="w-full">
      <iframe
        className="map-iframe w-1/2 m-auto"
        width="80%"
        height="500rem"
        border="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=medellin%20amparo%20sanchez+(Ashira)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a>
      </iframe>
    </div>
  );
};
