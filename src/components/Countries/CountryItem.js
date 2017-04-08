import React from 'react';
import {Link} from 'react-router';
import CountryFlag from './CountryFlag'
import '../../country.css'

const CountryItem = ({country, deleteCountry}) => (
  <div className="single-country" key={country.id}>
    <Link className='logo' to={'countries/country/' + country.id}>
      <CountryFlag imageUrl={country.imageUrl} />
    </Link>
    <button
      onClick={ deleteCountry.bind(null, country.id) }>
      DELETE
    </button>
  </div>
);

export default CountryItem;