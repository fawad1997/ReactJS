import React from 'react'

function ToDos({ todos, deleteTodo }) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (<div className="collection-item" key={todo.id} onClick={() => { deleteTodo(todo.id) }}>
                <span>{todo.content}</span>
            </div>)
        })
    )
        : (
            <p className="center">You dont have any thing to do!</p>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default ToDos
