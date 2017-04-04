import { combineReducers } from 'redux';
import countries  from './countries';
import selectedContinent from './selectedContinent';
import searchText from './searchText';

const reducers = combineReducers({
  countries,
  selectedContinent,
  searchText
});

export default reducers;