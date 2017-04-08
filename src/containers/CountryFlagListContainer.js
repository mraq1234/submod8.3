import { connect } from 'react-redux';
import CountryFlagList from '../components/Countries/CountryFlagList';
import { deleteCountry } from '../actions'
import { filterCountries } from '../reducers/countries'

const mapStateToProps = function (store) {
  return {
    countries: filterCountries(store.countries, "name", store.searchText),
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    deleteCountry: id => dispatch(deleteCountry(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagList);