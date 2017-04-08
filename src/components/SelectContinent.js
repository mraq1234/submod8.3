import React from 'react';
import '../country.css';

const SelectContinent = props => {
    debugger;
    return (
    <select value={props.filterText}
              onChange={event => props.setContinent(event.target.value)}>
        <option value="Europa">Europa</option>
        <option value="Afryka">Afryka</option>
    </select>
)};

export default SelectContinent;