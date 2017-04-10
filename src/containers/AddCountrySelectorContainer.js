import { connect } from 'react-redux';
import AddCountrySelector from '../components/AddCountrySelector';
import { addCountry } from '../actions/localCountries';
import { removeAddedCountry } from '../actions/allCountries';

const mapStateToProps = (store) => ({
    countries: store.addCountry
});

const mapDispatchToProps = function (dispatch) {
  return {
    addCountry: country => dispatch(addCountry(country)),
    removeAddedCountry: id => dispatch(removeAddedCountry(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCountrySelector);