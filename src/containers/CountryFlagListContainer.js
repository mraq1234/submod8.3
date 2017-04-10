import { connect } from 'react-redux';
import CountryFlagList from '../components/Countries/CountryFlagList';
import { filterCountries } from '../reducers/countries'
import { deleteCountry } from '../actions/localCountries';
import { addDeletedCountry } from '../actions/allCountries';

const mapStateToProps = function (store) {
  return {
    countries: filterCountries(store.countries, "name", store.searchText),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    addDeletedCountry: country => dispatch(addDeletedCountry(country)),
    deleteCountry: id => dispatch(deleteCountry(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagList);