import { connect } from 'react-redux';
import CountryFlagList from '../components/Countries/CountryFlagList';
import { filterCountries } from '../reducers/countries'
import { deleteCountry } from '../actions/countries';

const mapStateToProps = function (store) {
  return {
    countries: filterCountries(store.countries, "name", store.searchText),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    deleteCountry: country => dispatch(deleteCountry(country))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagList);