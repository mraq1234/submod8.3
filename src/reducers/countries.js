import {
  DELETE_COUNTRY
} from '../actions';

import initialState from '../../data/countries.json';

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COUNTRY:
      return state.filter(country => country.id !== action.id);
    default:
      return state;
  }
};

export const filterCountries = (countries, property, text="") => {
  debugger;
  switch (property) {
    case "continent":
      return countries.filter(country => country.continent === text);
    case "name":
      return countries.filter(country => country.name.toLowerCase().includes(text.toLowerCase()));
    default:
      return countries;
  }
}

export const getCountry = (countries, id) => countries.find(country => country.id === id);
// export const filterCountries = (countries, searchText) => 
// export const getCountriesByContinent = (countries, continent) => countries.filter(country => country.continent === continent);

export default countriesReducer;