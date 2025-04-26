// components/Boutique/CommandePanel.js
import React, { useState } from "react";
import { createCommande, validateCommande } from "../services/dolibarr/commande";
import { useNavigate } from "react-router-dom";

const CommandePanel = ({ panier, socid, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const preparerLignesCommande = () => {
    return panier.map(item => ({
      desc: item.label,
      qty: item.quantity,
      subprice: item.price / 100,
      tva_tx: item.tva_tx || 20.0,
      product_id: item.id,
      ref: item.ref
    }));
  };

  const validerCommandeDolibarr = async () => {
    if (!panier.length) return;
    
    setLoading(true);
    setError(null);

    try {
      // 1. Création de la commande
      const lignes = preparerLignesCommande();
      const commande = await createCommande(socid, lignes);
      
      // 2. Validation de la commande
      await validateCommande(commande.id);
      
      // 3. Redirection vers la page de confirmation
      onSuccess(commande.id);
      navigate(`/mes-commandes/${commande.id}`);
    } catch (err) {
      setError("Erreur lors de la création de la commande. Veuillez réessayer.");
      console.error("Erreur commande:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="commande-panel">
      <h3>Validation de la commande</h3>
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      <button
        onClick={validerCommandeDolibarr}
        disabled={loading || !panier.length}
        className="btn btn-primary"
      >
        {loading ? "Traitement..." : "Confirmer la commande"}
      </button>
      
      <div className="commande-info">
        <p>La commande sera créée dans Dolibarr avec les étapes suivantes :</p>
        <ol>
          <li>Création de la commande</li>
          <li>Validation de la commande</li>
          <li>Suivi du statut (facturation, paiement)</li>
        </ol>
      </div>
    </div>
  );
};

export default CommandePanel;