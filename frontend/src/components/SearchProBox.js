import React from 'react';
import { Link } from 'react-router-dom';
import Search_Icon from '../assets/search.png';


const SearchHomeBox = (/* { /* searchfield, searchChange  } */) => {
  return (
    <div className='linktoproworker' >
      <Link to="/Proworker">
        Parcourez notre liste de travailleurs
      </Link>
    </div>
  );
}

export default SearchHomeBox;