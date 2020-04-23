import React, { Component } from 'react'
import ToDos from './ToDos'
class ToDoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos:[
                 {
                     id:1,
                     content:'Do redux today'
                 },
                 {
                    id:2,
                    content:'Exercise'
                }
             ]
        }
    }

    deleteTodo = (id) =>{
        const todos = this.state.todos.filter((todo)=>{
            return todo.id!==id
        });
        console.log(todos)
        this.setState({todos})
    }
    
    render() {
        return (
            <div className="container">
                <h1 className="center">ToDo App</h1>
                <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}
export default ToDoApp
