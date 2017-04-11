import { connect } from 'react-redux';
import AddCountrySelector from '../components/AddCountrySelector';
import { addCountry } from '../actions/countries';

const mapStateToProps = (store) => ({
    countries: store.countriesToAdd
});

const mapDispatchToProps = function (dispatch) {
  return {
    addCountry: country => dispatch(addCountry(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCountrySelector);