import React, { Component } from 'react'

const initialState = {
    email:'',
    password:'',
    description:'',
    flavor:'',
    gender:'male',
    agreement:false,
    errors:{
        email:'',
        password:'',
        description:'',
        agreement:''
    }
}
const danger ={color:'red'}
class FormExample extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    validateForm = (errors) =>{
        let valid = true;
        if(!this.state.agreement || this.state.email ==='' || this.state.password === '' || this.state.description === ''){
            valid = false;
        }
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
    changeHandler = (event,fieldName,checkbox) =>{
        let errors = this.state.errors
        const {value} = event.target
         // eslint-disable-next-line
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch(fieldName){
            case 'email':
                errors.email = validEmailRegex.test(value)
                                ? ''
                                : 'Email is not valid';
                break;
            case 'password':
                errors.password = value.length < 8
                                    ? 'Password must be greater than 8'
                                    : '';
                break;
            case 'description':
                errors.description = value.length < 10
                                    ? 'Description must be greater than 10 characters long!'
                                    : '';
                break;
            case 'agreement':
                errors.agreement = event.target.checked
                                ? ''
                                : 'agreement must be checked';
                break;
            default:
                break;
        }
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value,
            errors
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        if(this.validateForm(this.state.errors)){
            console.info("Valid Form")
        }else{
            console.error('Invalid Form')
        }
      }
    render() {
        return (
            <React.Fragment>
                <h1>Form Example</h1>
                <form  onSubmit={this.handleSubmit}>
                <label>Email :</label>
                    <input type="text" value={this.state.email} onChange={event=>this.changeHandler(event,"email",false)}/><br/>
                    <span style={danger}>{this.state.errors.email}<br/></span>
                    <label>Password :</label>
                    <input type="password" value={this.state.password} onChange={event=>this.changeHandler(event,"password",false)}/><br/>
                    <span style={danger}>{this.state.errors.danger}<br/></span>
                    <label>Description : </label>
                    <textarea value={this.state.description} onChange={event=>this.changeHandler(event,"description",false)}></textarea><br/>
                    <span style={danger}>{this.state.errors.description}<br/></span>
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
                    <span style={danger}>{this.state.errors.agreement}<br/></span>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}
export default FormExample