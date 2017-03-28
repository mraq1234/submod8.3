import { combineReducers } from 'redux';
import countries  from './countries-reducer';

const reducers = combineReducers({
    countries
});

export default reducers;