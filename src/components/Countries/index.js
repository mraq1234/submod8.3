import React from 'react';
import SearchText from '../../containers/SearchTextContainer';
import CountryFlagList from '../../containers/CountryFlagListContainer';

const Countries = props => (
    <div>
        <SearchText />
        <br />
        <CountryFlagList />
    </div>
)

export default Countries