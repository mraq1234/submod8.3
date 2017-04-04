import React from 'react';
import '../country.css'

const CountryFlag = ({country}) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={country.imageUrl} alt="country flag" />
    </div>
);

export default CountryFlag;