import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import velo from '../assets/img/velo.png'
import Characteristics from "../components/Characteristics";
import Video from "../components/Video";
import OtherProduct from "../components/OtherProduct";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
    <div className="header">
      <Navbar />
      <div className="banner">
        <div className="left">
            <h1><span>Stellar Z.</span> Roulez vers 
            l’excellence</h1>
            <p>Offrez-vous la liberté de repousser vos limites avec les vélos Stellar. Conçus pour les passionnés de vitesse et d'adrénaline, alliant légèreté, robustesse et technologie de pointe, chaque modèle vous propulse dans une nouvelle ère du tout terrain.</p>
            <NavLink to="/">Essayez-le en magasin</NavLink>
        </div>
        <div className="right">
            <img src={velo} alt="photo vélo" />
            <div className="circle"></div>
        </div>
      </div>
      <Characteristics />
      </div>
      <Video />
      <OtherProduct />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
