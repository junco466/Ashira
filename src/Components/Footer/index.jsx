import React from "react";
import "./Footer.css";

import estrella from "../../assets/svg/Estrella.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";

const Footer = () => {
  return (
    <div className="footer-container flex flex-wrap mt-10">
      <div className="m-5 w-full">
        <p className="m-auto">Diseñado por YK Studio</p>
        <img className="w-8 m-auto p-1" src={estrella} alt="estrella" />
      </div>

      <div className="grid grid-cols-3 w-1/2 mb-8">
        <img className="w-11 m-auto" src={whatsapp} alt="estrella" />
        <img className="w-11 m-auto" src={facebook} alt="estrella" />
        <img className="w-11 m-auto" src={instagram} alt="estrella" />
      </div>
    </div>
  );
};

export default Footer;
