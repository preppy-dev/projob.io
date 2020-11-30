import React from 'react';
import './style.css'
import SearchHomeBox from '../../components/SearchHomeBox'
import SearchProBox from '../../components/SearchProBox'
import SectorCard from '../../components/SectorCard'
import ProductCard from '../../components/ProductCard';
import banner from '../../assets/banner_home.png';
import bannerabout from '../../assets/homeabout.png';


const Home = () =>{
  return(
    <div className="home">
     <div className="homebanner" style={{backgroundImage:`url(${banner})`}}>
       <h1>
        Rendre le service autrement
       </h1>
       <p>
       Trouvez un artisan qualifié près de chez vous
       </p>
       <SearchHomeBox />
     </div>

     <div className="homesector">
      <h2>
      Secteurs d’intervations
      </h2>
      <div className="sectors">
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
       <SectorCard/>
      </div>
      <div className='probtn'>
      <h2>
      Un pro pour tous vos soucis
      </h2>
      <SearchProBox/>
      </div>
     </div>
     
     <div className="homeabout" style={{backgroundImage:`url(${bannerabout})`}}>
       <div className="about" >
       <h1>
       Pour quoi Projob ?
       </h1>
       <p>
       PROJOB est une révolution du monde de travail technique et professionnel au Mali. 
       Nous venons Bouleverser les relations de travail entre les professionnels (proworkers) et les utilisateurs qui ont constamment besoin de service technique à travers notre solution digitale »
       <br/><br/>

      Vous êtes débordé d’eau à cause d’une fuite, sans lumière et cette fois c’est pas EDM qui vous lâches, 
      ou face à votre porte qui bloque.
      Vous ne savez pas vers qui vous tourner ? 
      À qui faire confiance ?
      Votre plateforme qui vous offre toute la palette de services professionnels au Mali, Nous sommes 
      la solution à tous vos besoins.


       </p>
       </div>
       <div className="services">
       <h1>
       Nos services
       </h1>
       <ul>
         <li>Plateforme de mise en relation</li>
         <li>Boutique artisanale </li>
         <li>Gestion de carrières </li>
         <li>Insertion Professionnelle et mise à disposition RH</li>
         <li>Formation et renforcement de capacités</li>
       </ul>
       </div>
     </div>
     {/* <div className="homestore">
       <h1>
        Quelle que articles depuis la boutique Artisanale
       </h1>
       <div className="products">
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       </div>
     </div> */}
    </div>
  )
} 

export default Home;