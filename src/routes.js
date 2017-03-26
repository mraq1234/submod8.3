import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentationals/navigation.component';
import Home from './presentationals/home.component';
import Contact from './presentationals/contact.component';
import NotFound from './presentationals/not-found.component';


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);