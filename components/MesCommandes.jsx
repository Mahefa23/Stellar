// components/Commandes/MesCommandes.js
import React, { useEffect, useState } from "react";
import { getCommandeStatus } from "../../services/dolibarr/commande";
import { Link } from "react-router-dom";

const MesCommandes = ({ userId }) => {
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommandes = async () => {
      try {
        // Récupérer les commandes du client
        const response = await dolibarrApi.get(`/orders?thirdparty_id=${userId}`);
        
        // Pour chaque commande, récupérer le statut complet
        const commandesAvecStatut = await Promise.all(
          response.data.map(async cmd => {
            const statut = await getCommandeStatus(cmd.id);
            return { ...cmd, ...statut };
          })
        );
        
        setCommandes(commandesAvecStatut);
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommandes();
  }, [userId]);

  const getStatusBadge = (commande) => {
    if (commande.paiements?.length > 0) {
      return <span className="badge bg-success">Paiement effectué</span>;
    }
    if (commande.factures?.length > 0) {
      return <span className="badge bg-info">Facture créée</span>;
    }
    return <span className="badge bg-warning">Commande validée</span>;
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="mes-commandes">
      <h2>Historique de mes commandes</h2>
      
      <table className="table">
        <thead>
          <tr>
            <th>Référence</th>
            <th>Date</th>
            <th>Montant TTC</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map(commande => (
            <tr key={commande.id}>
              <td>{commande.ref}</td>
              <td>{new Date(commande.date_creation).toLocaleDateString()}</td>
              <td>{commande.total_ttc} €</td>
              <td>{getStatusBadge(commande)}</td>
              <td>
                <Link to={`/commande/${commande.id}`} className="btn btn-sm btn-primary">
                  Détails
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MesCommandes;