import { combineReducers } from 'redux';
import countries  from './countries';
import selectedContinent from './selectedContinent';
import searchText from './searchText';
import addCountry from './addCountry';

const reducers = combineReducers({
  countries,
  selectedContinent,
  searchText,
  addCountry
});

export default reducers;