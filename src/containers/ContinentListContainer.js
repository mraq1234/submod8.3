import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions';
import { getCountriesByContinent } from '../reducers/countries';
import ContinentList from '../components/ContinentList';

const mapStateToProps = function (store) {
  return {
    countries: getCountriesByContinent(store.countries, store.selectedContinent),
    selectedContinent: store.selectedContinent
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    deleteCountry: id => dispatch(deleteCountry(id)),
    setContinent: continent => dispatch(setContinent(continent))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContinentList);