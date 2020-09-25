import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Nest from "./pages/nest/nest";
import HeaderNav from "./pages/header"


const BasicRoute = () => (
    <div>
        <HeaderNav></HeaderNav>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/nest" component={Nest}/>
                <Route exact path="/cart" component={Cart}/>
            </Switch>
        </HashRouter>
    </div>
    
);


export default BasicRoute;