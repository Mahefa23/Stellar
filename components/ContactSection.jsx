import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  return (
    <div className="contactSection">
      <h2>Retrouvez-nous</h2>
      <div className="wrapper">
        <div className="left">
          <h3>Nos magasins</h3>
          <div className="store">
            <FontAwesomeIcon
              icon={["fas", "location-dot"]}
              size="2x"
              className="icon"
            />
            <div className="store-infos">
              <h4>Paris 8 Store</h4>
              <p>123 Avenue de l’élysée</p>
              <p>93003 Paris, France</p>
              <FontAwesomeIcon
                icon={["fas", "phone"]}
                size="2x"
                className="iconPhone"
              />
              <span>+33 69 22 69 85</span>
            </div>
          </div>
          <div className="store">
            <FontAwesomeIcon
              icon={["fas", "location-dot"]}
              size="2x"
              className="icon"
            />
            <div className="store-infos">
              <h4>Paris 7 Store</h4>
              <p>Avenue Tour Eiffel</p>
              <p>Paris, France</p>
              <FontAwesomeIcon
                icon={["fas", "phone"]}
                size="2x"
                className="iconPhone"
              />
              <span>+33 69 22 69 85</span>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>Contactez-nous</h4>
          <form action="">
            <div className="input">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" placeholder="Rakotobe" />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="rakotobe@gmail.com" />
            </div>
            <div className="input">
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
