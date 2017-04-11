export const ADD_COUNTRY = 'ADD_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

export function deleteCountry(country) {
  return {
    type: DELETE_COUNTRY,
    country
  };
}

export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  }
}

export function setContinent(name) {
  return {
    type: SET_CONTINENT,
    name
  }
}

export function addCountry(country) {
  return {
    type: ADD_COUNTRY,
    country
  }
} 