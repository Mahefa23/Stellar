import React from 'react';
import casqueNoir from '../assets/img/1.png';
import gourde from '../assets/img/5.png';
import casqueNoirBleu from '../assets/img/2.png';
import { NavLink } from "react-router-dom";


const OtherProduct = () => {
    return (
        <div className='otherProduct'  id='produits'>
            <h2>Explorer Notre Gamme</h2>
            <div className="wrapper">
                <div className="card">
                    <img src={casqueNoir} alt="Photo casque noir" />
                    <div className="product-infos">
                        <h3>CASQUE NOIR</h3>
                        <p>MGA 75 000</p>
                        <NavLink to="/">Réserver</NavLink>
                    </div>
                </div>
                <div className="card">
                <img src={gourde} alt="photo gourde grenat" />
                <div className="product-infos">
                        <h3>GOURDE GRENAT</h3>
                        <p>MGA 65 000</p>
                        <NavLink to="/">Réserver</NavLink>
                    </div>
                </div>
                <div className="card">
                <img src={casqueNoirBleu} alt="photo casque noir bleu" />
                <div className="product-infos">
                        <h3>CASQUE NOIR BLEU</h3>
                        <p>MGA 105 000</p>
                        <NavLink to="/">Réserver</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherProduct;