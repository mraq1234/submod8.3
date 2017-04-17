import { connect } from 'react-redux';
import { filterCountries } from '../reducers/countries';
import ContinentList from '../components/ContinentList';
import { deleteCountry } from '../actions/countries';

const mapStateToProps = function (store) {
  return {
    countries: filterCountries(store.countries, "continent", store.selectedContinent),
    countriesToAddCount: store.countriesToAdd.length,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    deleteCountry: country => dispatch(deleteCountry(country))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);