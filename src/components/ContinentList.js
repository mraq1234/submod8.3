import React from 'react';
import CountryFlagList from '../components/FlagList';
import '../country.css';

const ContinentList = props => {
  return (
    <div>
      <select value={props.selectedContinent}
              onChange={event => props.setContinent(event.target.value)}>
        <option value="Europa">Europa</option>
        <option value="Afryka">Afryka</option>
      </select>
      <CountryFlagList countries={props.countries} deleteCountry={props.deleteCountry}/>
    </div>
  )
};

export default ContinentList;