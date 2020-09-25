
import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Hello extends Component {
    constructor(props={}) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div> {this.props.name}</div>
        )
    }
}

Hello.propTypes = {
    name: PropTypes.string
};