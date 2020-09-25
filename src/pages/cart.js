
import React, { Component } from "react";
import Hello from '../components/Hello/hello'

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div> 
                cart 购物车
                <Hello name="hello"></Hello>

            </div>
        )
    }
}