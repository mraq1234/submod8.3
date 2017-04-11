import {
  ADD_COUNTRY,
  DELETE_COUNTRY
} from '../actions/countries';

import initialState from '../../data/allCountries.json';

const addCountry = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return state.filter(country => country.id !== action.country.id);
    case DELETE_COUNTRY:
      return [action.country, ...state];
    default:
      return state;
  }
};

export default addCountry;