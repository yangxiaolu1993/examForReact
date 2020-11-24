import React,{useState} from 'react'
import {Link,Route,Switch} from 'react-router-dom';
import UseEffect from "./useEffect"
import CreateContext from "./createContext"
import UseState from "./useState"
import './hooks.less'
function HooksList (){
    return (
        <div className={'context'}>
            <h3>Hooks Exam List</h3>
            <ul>
                <li><Link to="/hooks/createContext">CreateContext</Link></li>
                <li><Link to="/hooks/useState">UseState</Link></li>
                <li><Link to="/hooks/useEffect">UseEffect</Link></li>
            </ul>

            <Switch>
                <Route path="/hooks/createContext" component={CreateContext}/>
                <Route path="/hooks/useEffect" component={UseEffect}/>
                <Route path="/hooks/useState" component={UseState}/>
            </Switch>

        </div>
        
    )
}

export default HooksList