import React from 'react';
import { Link } from 'react-router';
import CountryItem from './CountryItem';
import '../../country.css';



const CountryFlagList = ({countries, deleteCountry, addDeletedCountry, countriesToAddCount}) => {
  if (countries.length) {
    return (
      <div className="countries-list">
        {countries.map(
          country =>
            <CountryItem
              country={country}
              key={country.id}
              deleteCountry={deleteCountry}
              addDeletedCountry={addDeletedCountry}
            />
        )}
      </div>
    );
  } else if (countriesToAddCount) {
    return (
      <div className="countries-list">
        <Link to="/add" className="text-center">
          <button className="btn-primary btn-lg">
            Add some countries ...
          </button>
        </Link>
      </div>
    )
  }
  else {
    return (
      <div className="countries-list">
        No countries match conditions!
      </div>
    )
  }
};

export default CountryFlagList;