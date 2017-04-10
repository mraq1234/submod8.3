import {
  REMOVE_ADDED_COUNTRY,
  ADD_DELETED_COUNTRY
} from '../actions/allCountries';

import initialState from '../../data/allCountries.json';

const addCountry = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ADDED_COUNTRY:
      return state.filter(country => country.id !== action.id);
    case ADD_DELETED_COUNTRY:
      return [action.country, ...state];
    default:
      return state;
  }
};

export default addCountry;