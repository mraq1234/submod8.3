import {
  DELETE_COUNTRY,
  ADD_COUNTRY
} from '../actions/localCountries';

import initialState from '../../data/localCountries.json';

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COUNTRY:
      return state.filter(country => country.id !== action.id);
    case ADD_COUNTRY:
      return  [action.country, ...state];
    default:
      return state;
  }
};

export const filterCountries = (countries, property, text="") => {
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

export default countriesReducer;