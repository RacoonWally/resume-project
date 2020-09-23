import React from 'react';
import {Switch, Route, Redirect} from "react-router";

import MainPage from './pages/mainPage'
import BrandPage from "./pages/brandPage";
import LocalStoresPage from "./pages/localStoresPage";
import SingUpPage from "./pages/singUpPage";
import LookBookPage from "./pages/lookBookPage";
import ProductViewPage from "./pages/productViewPage";



export default (
    <Switch>
        <Route path='/' component={MainPage} exact/>
        <Route path='/brand' component={BrandPage} />
        <Route path='/local-stores' component={LocalStoresPage}/>
        <Route path='/sing-up' component={SingUpPage}/>
        <Route path='/look-book' component={LookBookPage}/>
        <Route path='/product-view/:id' render={()=><ProductViewPage/>}/>
        <Redirect to='/'/>
    </Switch>
);
