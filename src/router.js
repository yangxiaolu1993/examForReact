import React from 'react';
import {HashRouter, Route, Switch,BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Nest from "./pages/nest/nest";
import Hooks from "./pages/hooks/hooks"
import Antd from "./pages/antd"
import Rc from "./pages/rc"

const BasicRoute = () => (
    <div>
        {/* <HeaderNav></HeaderNav> */}
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/nest" component={Nest}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/antd" component={Antd}/>
                <Route exact path="/rc" component={Rc}/>
                <Route path="/hooks" component={Hooks}/>
            </Switch>
        </BrowserRouter>
    </div>
    
);


export default BasicRoute;