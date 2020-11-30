import React from 'react';
import SectorCard from '../../components/SectorCard';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

const Proworker = () =>{
  return(
    <div className="proworker">
     <form className="search-sectors">
       <div className="search">
            <div>
            <FontAwesomeIcon icon={faHouseUser} />
            </div>
            <div>
              <input
                  className='inpt'
                  type='search'
                  placeholder='Secteurs'
              /* onChange={searchChange} */
              />
            </div>
        
       </div>
       <div className="search">
            <div>
              <img src={""} alt="Customer icone"/>
            </div>
            <div>
            <input
                className='inpt'
                type='search'
                placeholder='Commune ?'
            /* onChange={searchChange} */
            />
         </div>
         
       </div>
       <div className="search">
          <div>
            <img src={""} alt="Customer icone"/>
          </div>
         <div>
            <input
                className='inpt'
                type='search'
                placeholder='Quartier ?'
            /* onChange={searchChange} */
            />
         </div>
         
       </div>
       <button type='submit'>Recherchez</button>
     </form>

     <div className="callaction">
       <div>
       Vous êtes Professionel ? , <a href="/signup">Inscrivez-vous </a>
       </div>
     </div>
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
    </div>
  )
}

export default Proworker;