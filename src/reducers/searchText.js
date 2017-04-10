import {
  SEARCH_COUNTRIES
} from '../actions/localCountries';

const searchText = (state = '', action) => {
  switch (action.type) {
    case SEARCH_COUNTRIES:
      return action.searchText;
    default:
      return state;
  }
};

export default searchText;