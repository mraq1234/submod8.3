import { connect } from 'react-redux';
import { deleteCountry } from '../actions';
import { filterCountries } from '../reducers/countries';
import ContinentList from '../components/ContinentList';

const mapStateToProps = function (store) {
  return {
    countries: filterCountries(store.countries, "continent", store.selectedContinent)
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    deleteCountry: id => dispatch(deleteCountry(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);