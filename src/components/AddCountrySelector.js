import React, { Component } from 'react';
import CountryFlag from './Countries/CountryFlag'
import '../country.css';

class AddCountrySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: this.props.countries[0]
        };
        this.selectChangeHandler = this.selectChangeHandler.bind(this);
        this.addCountryClickHandler = this.addCountryClickHandler.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({selectedCountry: nextProps.countries[0]});
    }

    selectChangeHandler(e) {
        const id = e.target.value;
        const selectedCountry = this.props.countries.find(country => country.id === id);
        this.setState({selectedCountry});
    }

    addCountryClickHandler() {
        this.props.addCountry(this.state.selectedCountry);
    }

    renderEmpty() {
        return <div className="text-center" >No more countries to ADD</div>;
    }

    renderOptions() {
      return this.props.countries.map(country =>
        <option
          key={country.id}
          value={country.id}>
          {country.name}
        </option>);
    }

    renderSelect() {
        return (
            <div className="text-center selected-country-wraper">
                <select
                  className="form-control"
                  value={this.state.selectedCountry.id}
                  onChange={this.selectChangeHandler}
                >
                  {this.renderOptions()}
                </select>
                <br />
                <CountryFlag imageUrl={this.state.selectedCountry.imageUrl}/>
                <br />
                <button
                  className="btn-primary btn-block btn-lg"
                  onClick={this.addCountryClickHandler}>
                    ADD
                </button>
            </div>
        )
    }   
    
    render() {
        return (
            this.props.countries.length
              ? this.renderSelect()
              : this.renderEmpty()
        )
    }
};

export default AddCountrySelector;