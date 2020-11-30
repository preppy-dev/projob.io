import React from 'react'
import Customer from '../../assets/customer-service-white.png';

const Footer = ()=>{
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="info">
         <h2>Centre d’Assistance</h2>
         <p>
           <div className="customericone">
           <div>
             <img src={Customer} alt="Customer icone"/>
             </div>
            <div>00 223-78 70 97 77 - 60 90 09 76</div>
           </div>
         </p>
         <h2>Jours ouvrables</h2>
         <p>LUNDI - VENDREDI : 9.00 H - 18.30 H</p>
         <p>SAMEDI & DIMANCHE - VENDREDI : 10.00 H - 17.00 H</p>
        </div>
        <div className="devis">
          <a href="/devis"> Faire un dvis en ligne</a>
        </div>
      </div>
     <div className="legal">
     <p>© 2020 Projob.io</p>
     </div>
    </div>
  )
}

export default Footer ;