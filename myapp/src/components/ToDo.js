import React, { Component } from 'react'

class ToDo extends Component {
    render() {
        return this.props.todo.map(x=>(
            <h2 key={x.id}>{x.title}</h2>
        ))
    }
}

export default ToDo
