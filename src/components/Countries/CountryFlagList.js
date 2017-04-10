import React from 'react';
import CountryItem from './CountryItem';
import '../../country.css';



const CountryFlagList = (props) => {
  return (
    <div className="countries-list">
      {props.countries.map(country => <CountryItem country={country}
                                                   key={country.id}
                                                   deleteCountry={props.deleteCountry}
                                                   addDeletedCountry={props.addDeletedCountry} />)}
    </div>
  );
};

export default CountryFlagList;