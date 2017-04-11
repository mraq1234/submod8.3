import { combineReducers } from 'redux';
import countries  from './countries';
import selectedContinent from './selectedContinent';
import searchText from './searchText';
import countriesToAdd from './countriesToAdd';

const reducers = combineReducers({
  countries,
  countriesToAdd,
  selectedContinent,
  searchText
});

export default reducers;