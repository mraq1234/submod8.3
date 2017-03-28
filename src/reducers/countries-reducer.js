import countriesData from '../../data/countries.json';

const initialState = {
    countries: countriesData
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
};

export default countriesReducer;