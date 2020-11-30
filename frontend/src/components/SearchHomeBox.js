import React from 'react';
import Search_Icon from '../assets/search.png';


const SearchHomeBox = (/* { /* searchfield, searchChange  } */) => {
  return (
    <form className='inputbox'>
      <div className='inpt'>
      <input 
      type='search'
      placeholder='Quelles genre de service procurez-vous ?'
      /* onChange={searchChange} */
    />
      </div> 
        <button type="submit" className="searchicon">
          <img style={{marginRight:'auto'}} src={Search_Icon} alt="Customer icone"/>
          </button> 
    </form>
  );
}

export default SearchHomeBox;