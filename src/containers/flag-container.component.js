import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentationals/flag-list.component';
import { getCountries } from '../actions/actions-countries';
import '../country.css';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CountryFlagList countries={this.props.countries} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countries.countries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);