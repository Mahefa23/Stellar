import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot">
      <div className="wrapper">
        <div className="left">
          <h3>STELLAR</h3>
          <p>La performance sans limites</p>
        </div>
        <div className="right">
          <div className="social-media">
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              size="2x"
              className="icon"
            />
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="2x"
              className="icon"
            />
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              size="2x"
              className="icon"
            />
          </div>
          <div className="link">
            <div className="navLink">
              <h4>Liens utiles</h4>
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/">Produits</NavLink>
              <NavLink to="/">Contact</NavLink>
              <NavLink to="/">Boutique</NavLink>
            </div>
            <div className="contact">
              <h4>Contact rapides</h4>
              <p>+33 69 22 69 85</p>
              <p>+34 69 69 87 03</p>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">© 2024 STELLAR Z, Tous droits réservés.</p>
    </div>
  );
};

export default Footer;
