// Panier.js
import React from "react";
import { NavLink } from "react-router-dom";

const Panier = ({ panier, total, viderPanier, ajouterAuPanier, retirerDuPanier, validerCommande, commandeValidee }) => {
  return (
    <div className="panier">
      <h2>Votre Panier</h2>
      {panier.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          <ul>
            {panier.map((item) => (
              <li key={item.id}>
                {item.label} - {item.price / 100} Ariary x {item.quantity}
                <NavLink to='/boutique' onClick={() => retirerDuPanier(item.id)}>-</NavLink>
                <NavLink to='/boutique' onClick={() => ajouterAuPanier(item)}>+</NavLink>
              </li>
            ))}
          </ul>
          <p>Total: {total / 100} Ariary</p>
          <button onClick={viderPanier}>Vider le panier</button>
          <button onClick={validerCommande}>Valider la commande</button>
        </>
      )}
      {commandeValidee && (
        <div className="confirmation">
          <p>Commande validée avec succès !</p>
        </div>
      )}
    </div>
  );
};

export default Panier;
