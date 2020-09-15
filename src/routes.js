import React from 'react';
import {Switch, Route} from "react-router";

import MainPage from './pages/mainPage'
import BrandPage from "./pages/brandPage";
import LocalStoresPage from "./pages/localStoresPage";



export default (
    <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/brand' component={BrandPage} exact/>
        <Route path='/local-stores' component={LocalStoresPage} exact/>
    </Switch>
);
