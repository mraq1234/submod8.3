export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  };
}

export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  }
}

export function setContinent(name) {
  debugger;
  return {
    type: SET_CONTINENT,
    name
  }
}
