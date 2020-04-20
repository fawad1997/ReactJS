import React, { Component } from 'react'
class ClassComponentExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }
    incrementOne = () =>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button type="button" onClick={this.incrementOne}>Increment</button>
            </>
        )
    }
}
export default ClassComponentExample
