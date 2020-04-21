import React, { Component } from 'react'

class FormExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
             flavor:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    changeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        alert('flavor was ' + this.state.flavor);
        event.preventDefault();
      }
    render() {
        return (
            <React.Fragment>
                <h1>Form Example</h1>
                <form  onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite flavor:
                        <select name="flavor" value={this.state.flavor} onChange={this.changeHandler}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>
        )
    }
}
export default FormExample