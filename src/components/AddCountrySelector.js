import React, { Component } from 'react';
import CountryFlag from './Countries/CountryFlag'
import '../country.css';

class AddCountrySelector extends Component {
    constructor(props) {
        super(props);
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.addCountryClickHandler = this.addCountryClickHandler.bind(this);
    }

    componentDidMount () {
        const selectorEl = document.getElementById("selectCountry");
        if (selectorEl) selectorEl.addEventListener("change", this.selectChangeHandler, false);
    }

    selectChangeHandler (e) {
        const flagImg = document.getElementById("flagImg");
        const id = e.target.value;
        const selectedCountry = this.props.countries.find(country => country.id === id);
        flagImg.src = selectedCountry.imageUrl;
    }

    addCountryClickHandler (props) {
        const flagImg = document.getElementById("flagImg");
        const id = document.getElementById("selectCountry").value;
        const country = props.countries.find(country => country.id === id);
        
        props.removeAddedCountry(id);
        props.addCountry(country);

        flagImg.src = props.countries[0].imageUrl;
    }

    renderEmpty () {
        return (
                <div className="text-center" >No more countries to ADD</div>
        )
    }

    renderNoEmpty () {
        return (
            <div id="selectContainer" className="text-center selected-country-wraper">
                <select id="selectCountry" className="form-control">
                    {this.props.countries.map(country =>
                        <option
                            key={country.id}
                            value={country.id}>
                            {country.name}
                        </option> )} 
                </select><br />
                
                <CountryFlag imageUrl={this.props.countries[0].imageUrl}/><br />
                <button className="btn-primary btn-block btn-lg" onClick={this.addCountryClickHandler.bind(null, this.props)}>ADD</button>
            </div>
        )
    }   
    
    render () {
        return (
            this.props.countries.length > 0 ? this.renderNoEmpty() : this.renderEmpty()
        )
    }
};

export default AddCountrySelector;