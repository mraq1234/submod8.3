import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Countries from './components/Countries';
import CountryDetailsContainer from './containers/CountryDetailContainer';
import ContinentListContainer from './containers/ContinentListContainer';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='countries'>
            <IndexRoute component={Countries}/>
            <Route path='country/:id' component={CountryDetailsContainer}/>
        </Route>
        <Route path='continents' component={ContinentListContainer}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);