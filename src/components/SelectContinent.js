import React from 'react';
import '../country.css';

const SelectContinent = props => {
    return (
    <select value={props.filterText}
              onChange={event => props.setContinent(event.target.value)}>
        <option value="Europa">Europa</option>
        <option value="Afryka">Afryka</option>
        <option value="Ameryka Płd">Ameryka Płd</option>
        <option value="Ameryka Płn">Ameryka Płn</option>
        <option value="Australia">Australia</option>
    </select>
)};

export default SelectContinent;