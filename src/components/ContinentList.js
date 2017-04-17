import React from 'react';
import SelectContinent from '../containers/SelectContinentContainer';
import CountryFlagList from './Countries/CountryFlagList';
import '../country.css';

const ContinentList = props => {
  return (
    <div>
      <SelectContinent />
      <CountryFlagList
        countriesToAddCount={props.countriesToAddCount}
        countries={props.countries}
        deleteCountry={props.deleteCountry} />
    </div>
  )
};

export default ContinentList;
