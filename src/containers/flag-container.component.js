import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentationals/flag-list.component';
import { searchCountries, deleteCountry } from '../actions/actions-countries'
import '../country.css';


class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.deleteCountry = this.deleteCountry.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(searchCountries(''));
    }

    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search}/>
                </div>
                <CountryFlagList
                    countries={this.props.visibleCountries}
                    deleteCountry={this.deleteCountry} 
                />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countries.countries,
        visibleCountries: store.countries.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);