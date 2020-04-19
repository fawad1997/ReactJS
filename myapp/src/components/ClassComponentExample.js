import React, { Component } from 'react'
class ClassComponentExample extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.myname} from Class Component</h1>
            </div>
        )
    }
}
export default ClassComponentExample
