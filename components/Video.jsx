import React from "react";
import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jfif";
import image4 from "../assets/img/4.jfif";

const Video = () => {
  return (
    <div className="videoSection">
      <h2>Découvrez la puissance</h2>
      <p>
        Découvrez le STELLAR Z en pleine action sur les terrains les plus
        difficiles. <br />Conçu pour la performance et l'aventure, ce vélo repousse
        les limites de la vitesse et de la résistance.
      </p>

      <div className="videoWrapper">
        <div className="video">
          <video width="100%" height="auto" controls autoPlay loop muted>
            <source
              src="https://videos.pexels.com/video-files/854543/854543-sd_640_360_30fps.mp4"
              type="video/mp4"
            />
            Votre navigateur ne supporte pas les vidéos HTML5.
          </video>
        </div>
        <div className="photo">
          <img src={image1} alt="image 1" />
          <img src={image3} alt="image 3" />
          <img src={image2} alt="image 2" />
          <img src={image4} alt="image 4" />
        </div>
      </div>
    </div>
  );
};

export default Video;
