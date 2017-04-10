import {connect} from 'react-redux';
import {searchCountries} from '../actions/localCountries'
import SearchText from '../components/SearchText'


const mapStateToProps = (store) => ({
    filterText: store.searchText
});

const mapDispatchToProps = (dispatch) => ({
    searchCountries: text => dispatch(searchCountries(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchText);