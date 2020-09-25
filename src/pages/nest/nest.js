
import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import NestFirst from './first'

export default class Nest extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="nest">
                一级路由
                <Switch>
                    <Route path="/nest/first" component={NestFirst}/>
                </Switch>
            </div>
            
        )
    }
}