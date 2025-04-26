import React, { useEffect, useState } from "react";
import dolibarrApi from "../services/dolibarr/dolibarrApi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Boutique = () => {
  const [produits, setProduits] = useState([]);
  const [panier, setPanier] = useState([]);
  const [total, setTotal] = useState(0);
  const [commandeValidee, setCommandeValidee] = useState(false);
  const [panierOuvert, setPanierOuvert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    dolibarrApi
      .get("/products")
      .then((res) => {
        setProduits(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Calcul du total du panier
  useEffect(() => {
    const calculTotal = panier.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(calculTotal);
  }, [panier]);

  const ajouterAuPanier = (produit) => {
    setPanier((prevPanier) => {
      const existeDeja = prevPanier.find((item) => item.id === produit.id);

      if (existeDeja) {
        return prevPanier.map((item) =>
          item.id === produit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevPanier, { ...produit, quantity: 1 }];
      }
    });
  };

  const retirerDuPanier = (produitId) => {
    setPanier((prevPanier) =>
      prevPanier.reduce((acc, item) => {
        if (item.id === produitId) {
          if (item.quantity > 1) {
            return [...acc, { ...item, quantity: item.quantity - 1 }];
          }
          return acc;
        }
        return [...acc, item];
      }, [])
    );
  };

  const viderPanier = () => {
    setPanier([]);
    setTotal(0);
  };

  const validerCommande = async () => {
    if (panier.length === 0) return;
  
    setLoading(true);
    setError(null);
  
    try {
      const lines = panier.map((item) => ({
        product_id: item.id,
        qty: item.quantity,
        subprice: item.price, // Attention: Dolibarr attend le prix *HT*
        tva_tx: 20.0,
        fk_product_type: 0,
        desc: item.label,
      }));
  
      const commandeData = {
        socid: 1, // à remplacer par l'ID réel du client Dolibarr
        type: 0,
        lines: lines,
        date: new Date().toISOString().split("T")[0],
        note_public: "Commande depuis NewApp",
        model_pdf: "commande",
      };
  
      console.log("Données envoyées à Dolibarr:", commandeData);
  
      const response = await dolibarrApi.post("/orders", commandeData);
      console.log("Réponse de Dolibarr:", response.data);
  
      if (response.data && response.data.id) {
        const validationResponse = await dolibarrApi.put(
          `/orders/${response.data.id}/validate`
        );
        console.log("Validation commande:", validationResponse.data);
  
        // navigate n'est pas défini ici, tu dois l'importer :
        navigate(`/commande-confirmation/${response.data.id}`);
      }
    } catch (error) {
      console.error("Erreur détaillée:", {
        message: error.message,
        response: error.response?.data,
        config: error.config,
      });
  
      setError(
        error.response?.data?.error?.message ||
          "Erreur lors de la création de la commande. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };
  
  const togglePanier = () => {
    setPanierOuvert(!panierOuvert);
  };

  const navigate = useNavigate();

  return (
    <div className="boutique">
      <h1>Nos produits Stellar</h1>

      {/* Icone de panier */}
      <div className="panier-icon" onClick={togglePanier}>
        <i className="fas fa-shopping-cart"></i>
        {panier.length > 0 && (
          <span className="panier-count">{panier.length}</span>
        )}
      </div>

      <div className="wrapper">
        {produits.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image_url || "default_image.jpg"} alt={p.label} />
            <div className="product-infos">
              <h3>{p.label}</h3>
              <p>{p.price / 100} Ariary</p>
              <button onClick={() => ajouterAuPanier(p)}>
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Panier */}
      {panierOuvert && (
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
                    <NavLink
                      to="/boutique"
                      onClick={() => retirerDuPanier(item.id)}
                    >
                      -
                    </NavLink>
                    <NavLink
                      to="/boutique"
                      onClick={() => ajouterAuPanier(item)}
                    >
                      +
                    </NavLink>
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
      )}
    </div>
  );
};

export default Boutique;
