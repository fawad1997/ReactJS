import React, { Component } from 'react'

class FormExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
             gender:'male'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    changeHandler = (event) =>{
        alert([event.target.name]+' = '+ event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        alert('gender was ' + this.state.gender);
        event.preventDefault();
      }
    render() {
        return (
            <React.Fragment>
                <h1>Form Example</h1>
                <form  onSubmit={this.handleSubmit}>
                    <label>Gender : </label>
                    <label><input type="radio" name="gender" value="male" checked={this.state.gender==='male'} onChange={this.changeHandler}></input>male</label>
                    <label><input type="radio" name="gender" value="female" checked={this.state.gender==='female'} onChange={this.changeHandler}></input>female</label><br/>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}
export default FormExample