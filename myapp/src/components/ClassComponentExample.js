import React, { Component } from 'react'
class ClassComponentExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
             usersList:[
                 {
                     id:1,
                     name:"Fawad",
                     age:23
                 },
                 {
                    id:2,
                    name:"Asad",
                    age:25
                }
             ]
        }
    }
    render() {
        const users = this.state.usersList.map((user)=> <h1 key={user.id}>Name is {user.name} and age is {user.age}</h1>)
        return (
            <>
                {users}
            </>
        )
    }
}
export default ClassComponentExample
