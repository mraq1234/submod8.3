import {
  SET_CONTINENT
} from '../actions';

const selectedContinent = (state = 'Afryka', action) => {
  debugger;
  switch (action.type) {
    case SET_CONTINENT:
      return action.name;
    default:
      return state;
  }
};

export default selectedContinent;