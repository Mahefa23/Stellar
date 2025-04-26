import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Characteristics = () => {
  return (
    <div className="characteristic">
      <h2>Caractéristique avancés</h2>

      <div className="card-characteristic">
        <div className="card">
        <FontAwesomeIcon icon={['fas', 'bicycle']} size="2x" className="icon"/>
          <h3>MATERIAUX</h3>
          <p>Fibre de carbone</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={['fas', 'bicycle']} size="2x" className="icon"/>
          <h3>TRANSMISSION</h3>
          <p>Système électronique</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={['fas', 'bicycle']} size="2x" className="icon"/>
          <h3>SUSPENSION</h3>
          <p>Amortisseur pneumatique</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={['fas', 'bicycle']} size="2x" className="icon"/>
          <h3>FREINS</h3>
          <p>Disques hydrauliques</p>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
