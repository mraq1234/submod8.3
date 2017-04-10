import { connect } from 'react-redux';
import { filterCountries } from '../reducers/countries';
import ContinentList from '../components/ContinentList';
import { deleteCountry } from '../actions/localCountries';
import { addDeletedCountry } from '../actions/allCountries';

const mapStateToProps = function (store) {
  return {
    countries: filterCountries(store.countries, "continent", store.selectedContinent)
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    addDeletedCountry: country => dispatch(addDeletedCountry(country)),
    deleteCountry: id => dispatch(deleteCountry(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);