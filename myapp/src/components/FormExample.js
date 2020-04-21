import React, { Component } from 'react'

class FormExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
             email:'',
             password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    changeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        alert('Email was ' + this.state.email+' Password was '+this.state.password);
        event.preventDefault();
      }
    render() {
        return (
            <React.Fragment>
                <h1>Form Example</h1>
                <form  onSubmit={this.handleSubmit}>
                    <label>Email :</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.changeHandler}/><br/>
                    <label>Password :</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}
export default FormExample