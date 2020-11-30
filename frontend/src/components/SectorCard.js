import React from 'react';
import { Link } from 'react-router-dom';
import SectorDefaultIcon from '../assets/sectordefaulticon.png';


const SectorCard = (/* { /* searchfield, searchChange  } */) => {
  return (
    <Link className="onesector" to={'/SectorSingle'}>
      <img src={SectorDefaultIcon} alt="Customer icone"/>    
      <p>Fenêtre et 
      Porte</p>
    </Link>
  );
}

export default SectorCard;