import React from 'react';
import '../country.css'

const CountryFlag = ({imageUrl}) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={imageUrl} alt="country flag" />
    </div>
);

export default CountryFlag;