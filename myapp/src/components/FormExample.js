import React, { Component } from 'react'

class FormExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'',
            password:'',
            description:'',
            flavor:'',
            gender:'male',
            agreement:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    changeHandler = (event,fieldName,checkbox) =>{
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
      }
    render() {
        return (
            <React.Fragment>
                <h1>Form Example</h1>
                <form  onSubmit={this.handleSubmit}>
                <label>Email :</label>
                    <input type="text" value={this.state.email} onChange={event=>this.changeHandler(event,"email",false)}/><br/>
                    <label>Password :</label>
                    <input type="password" value={this.state.password} onChange={event=>this.changeHandler(event,"password",false)}/><br/>
                    <label>Description : </label>
                    <textarea value={this.state.description} onChange={event=>this.changeHandler(event,"description",false)}></textarea><br/>
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.flavor} onChange={event=>this.changeHandler(event,"flavor",false)}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label><br/>
                    <label>Gender : </label>
                    <label><input type="radio" value="male" checked={this.state.gender==='male'} onChange={event=>this.changeHandler(event,"gender",false)}></input>male</label>
                    <label><input type="radio" value="female" checked={this.state.gender==='female'} onChange={event=>this.changeHandler(event,"gender",false)}></input>female</label><br/>
                    <label><input type="checkbox" checked={this.state.agreement} onChange={event=>this.changeHandler(event,"agreement",true)}></input> I agree with terms and conditions</label><br/>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}
export default FormExample