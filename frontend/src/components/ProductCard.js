import React from 'react';
import SectorDefaultIcon from '../assets/sectordefaulticon.png';


const ProductCard = (/* { /* searchfield, searchChange  } */) => {
  return (
    <div className="oneproduct">
      <img src={SectorDefaultIcon} alt="Customer icone"/>  
      <h3>10.000 FCFA</h3>  
      <p>Fenêtre et 
      Porte</p>
    </div>
  );
}

export default ProductCard;