import React from 'react';
import SelectContinent from '../containers/SelectContinentContainer';
import CountryFlagList from './Countries/CountryFlagList';
import '../country.css';

const ContinentList = props => {
  return (
    <div>
      <SelectContinent />
      <CountryFlagList countries={props.countries} deleteCountry={props.deleteCountry} addDeletedCountry={props.addDeletedCountry}/>
    </div>
  )
};

export default ContinentList;
