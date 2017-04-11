import React from 'react';
import '../country.css'

export default ({filterText, searchCountries}) =>
  <div className="search text-center">
    <input
      type="text"
      value={filterText}
      onChange={event => searchCountries(event.target.value)}/>
  </div>;