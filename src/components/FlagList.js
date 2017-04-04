import React from 'react';
import {Link} from 'react-router';
import CountryFlag from './Flag';
import '../country.css';

const CountryItem = ({country, deleteCountry}) => (
  <div className="single-country" key={country.id}>
    <Link className='logo' to={'countries/country/' + country.id}>
      <CountryFlag country={country}/>
    </Link>
    <button
      onClick={deleteCountry}>
      DELETE
    </button>
  </div>
);

const CountryFlagList = (props) => {
  return (
    <div className="countries-list">
      {props.countries.map(country => <CountryItem country={country}
                                                   key={country.id}
                                                   deleteCountry={props.deleteCountry.bind(null, country.id)}/>)}
    </div>
  );
};

export default CountryFlagList;