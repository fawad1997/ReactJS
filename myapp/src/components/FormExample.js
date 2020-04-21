import React, { Component } from 'react'
import Checkbox from './Checkbox'

class FormExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            label:'I agree with terms and conditions',
            name:'agreement',
            isChecked:true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    changeHandler = (event) =>{
        this.setState({
            isChecked: event.target.checked
        })
        alert(this.state.isChecked)
    }
    handleSubmit(event) {
        event.preventDefault();
      }
    render() {
        //const {label,name,isChecked} = this.state
        return (
            <React.Fragment>
                <h1>Form Example</h1>
                <form  onSubmit={this.handleSubmit}>
                    <Checkbox name={this.state.name} onChange={this.changeHandler} label={this.state.label} checked={this.state.isChecked} />
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}
export default FormExample