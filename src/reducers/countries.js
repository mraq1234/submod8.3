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

export const getCountry = (countries, id) => countries.find(country => country.id === id);
export const filterCountries = (countries, searchText) => countries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()));
export const getCountriesByContinent = (countries, continent) => countries.filter(country => country.continent === continent);

export default countriesReducer;


