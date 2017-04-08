import React from 'react';
import '../country.css'

const SearchText = props => {
    return (
       
            <div className="search text-center">
            <input type="text" value={props.filterText} onChange={event => props.searchCountries(event.target.value)}/>
        </div>
    )
}

export default SearchText;