import React from 'react';
import Logo from '../../assets/logo.png';
import Customer from '../../assets/customer-service.png';
import Arrow_Bottom from '../../assets/arrowbottom.png';

/* import Shopping_cart from '../../assets/shopping-cart.png'; */

const Header = () => {
  return (
    <div className="header">
     <div className="logo">
      <a href="/">
      <img src={Logo} alt="Logo Projob.io"/>
      </a>
     </div>
     <div className="menu">
      <div className="nav-menu">
        <ul>
          <li className="customer">
            <div>
          <img src={Customer} alt="Customer icone"/>
          </div> <div>Nos Contact </div><div><img src={Arrow_Bottom} alt="arrow bootom"/></div></li>
          <li><a href="/proworker">Nos travailleurs</a></li>
          <li><a href="/about">Découvrez nous</a></li>
          {/* <li><span><img src={Shopping_cart} alt="shooping cart icone"/></span>Boutique Artisanale</li> */}
        </ul>
      </div>
      <div className="nav-login">
        <ul>
          <li><a href="/signin">Connexion</a></li>
          <li className="inscription"><a href="/signup">S’inscrire en tant que pro</a></li>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default Header;