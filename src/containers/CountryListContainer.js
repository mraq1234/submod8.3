import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryFlagList from '../components/FlagList';
import {searchCountries, deleteCountry} from '../actions'
import {filterCountries} from '../reducers/countries'
import '../country.css';


const CountryFlagContainer = props => {
  return (
    <div>
      <div className="search text-center">
        <input type="text" value={props.searchText} onChange={event => props.searchCountries(event.target.value)}/>
      </div>
      <CountryFlagList
        countries={props.countries}
        deleteCountry={props.deleteCountry}
      />
    </div>
  )
};

const mapStateToProps = function (store) {
  return {
    countries: filterCountries(store.countries, store.searchText),
    searchText: store.searchText
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    deleteCountry: id => dispatch(deleteCountry(id)),
    searchCountries: text => dispatch(searchCountries(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagContainer);