import React from 'react';
import {Link} from 'react-router';
import CountryFlag from './CountryFlag'
import '../../country.css'

const deleteCountryAction = (props) => {
  props.deleteCountry(props.country);
}

const CountryItem = (props) => (
  <div className="single-country" key={props.country.id}>
    <Link className='logo' to={'countries/country/' + props.country.id}>
      <CountryFlag imageUrl={props.country.imageUrl} />
    </Link>
    <button
      onClick={deleteCountryAction.bind(null, props) }>
      DELETE
    </button>
  </div>
);

export default CountryItem;