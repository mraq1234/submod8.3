export const REMOVE_ADDED_COUNTRY = 'REMOVE_ADDED_COUNTRY';
export const ADD_DELETED_COUNTRY = 'ADD_DELETED_COUNTRY';

export function removeAddedCountry(id) {
  return {
    type: REMOVE_ADDED_COUNTRY,
    id
  }
}

export function addDeletedCountry(country) {
  return {
    type: ADD_DELETED_COUNTRY,
    country
  }
}