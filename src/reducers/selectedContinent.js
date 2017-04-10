import {
  SET_CONTINENT
} from '../actions/localCountries';

const selectedContinent = (state = 'Afryka', action) => {
  switch (action.type) {
    case SET_CONTINENT:
      return action.name;
    default:
      return state;
  }
};

export default selectedContinent;