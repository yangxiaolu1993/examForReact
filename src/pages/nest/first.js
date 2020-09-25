
import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';
import NestSecond from './second'

export default class NestFirst extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div className="nest">
                二级路由
                <Switch>
                    <Route exact path="/nest/first/second" component={NestSecond}/>
                </Switch>
            </div>
        )
    }
}