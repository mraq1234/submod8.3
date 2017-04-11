import { connect } from 'react-redux';
import SelectContinent from '../components/SelectContinent';
import { setContinent } from '../actions/countries';

const mapStateToProps = (store) => ({
    filterText: store.selectedContinent
});

const mapDispatchToProps = function (dispatch) {
  return {
    setContinent: continent => dispatch(setContinent(continent))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectContinent);