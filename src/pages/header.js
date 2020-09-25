
import React, { Component } from "react";


export default class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val:0
         }
    }
    componentDidMount(){
        this.setState({
            val:this.state.val + 1
        })

        setTimeout(()=>{
            this.setState({
                val:this.state.val + 1
            })
        },1000)
        
        this.setState({
            val:this.state.val + 1
        })
    }
    render() {
       
        return (
            <div>顶部导航{this.state.val}</div>
        )
    }
}