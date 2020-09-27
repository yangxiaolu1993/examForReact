import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Nest from "./pages/nest/nest";
import HeaderNav from "./pages/header"
import Hooks from "./pages/hooks/hooks1"

const BasicRoute = () => (
    <div>
        {/* <HeaderNav></HeaderNav> */}
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/nest" component={Nest}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/hooks" component={Hooks}/>
            </Switch>
        </HashRouter>
    </div>
    
);


export default BasicRoute;