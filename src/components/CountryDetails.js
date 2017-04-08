import React from 'react';
import '../country.css';

const CountryDetails = ({country: { imageUrl, name, continent, populace, capital, currency }}) => {

  return (<div className="country-wrapper">
    <header>
      <img className="country-photo" src={imageUrl} alt="country flag"/>
    </header>
    <div className="country-info">
      <h1>{name}</h1>
      <h2>Kontynent: {continent}</h2>

      <div className="info">
        <div>
          <span>{populace}</span>
          <span>Ludność[mln]</span>
        </div>

        <div>
          <span>{capital}</span>
          <span>Stolica</span>
        </div>

        <div>
          <span>{currency}</span>
          <span>Waluta</span>
        </div>
      </div>
    </div>
  </div>);
};

export default CountryDetails;