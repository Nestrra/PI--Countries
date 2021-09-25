import React from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { CountriesScreen } from '../countries/CountriesScreen.js';
import { LandingScreen } from '../landing/LandingScreen.js';
import {CountryDetail} from '../countries/CountryDetail';
import {FormActivity} from '../formActivity/FormActivity'




export const AppRouters = () => {
    return (
        <Router>
            <div>
                <Route
                    exact
                    path="/"
                    component={LandingScreen}
                />
                <Route
                    path="/countries"
                    component={CountriesScreen}
                />
                <Route
                    path="/country/:id"
                    component={CountryDetail}
                />
                <Route
                    path="/activity"
                    component={FormActivity}
                />
            </div>
        </Router>
    )
}


