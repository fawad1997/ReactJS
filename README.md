# ReactJS
This README files contains basic information required to learn and create react app.
## Quick Links
-   [React Basics](#react-basics)
    -   [What is React](#what-is-react)
    -   [Create React App](#create-react-app)
    -   [Components](#components)
        -   [Functional Components](#functional-components)
        -   [Class Components](#class-components)
    -   [Lifecycle](#lifecycle)
    -   [Props](#props)
    -   [State](#state)
    -   [Destructure Props and State](#destructure-props-and-state)
    -   [Forms](#forms)
        -   [Basic Form](#basic-form)
        -   [Generic Form](#generic-form)
    -   [Form Validations](#form-validations)
    -   [Map-List Ilterations](#map-list-ilterations)
    -   [React Router](#react-router)
-   [Redux](#redux)
-   [Deployment](#deployment)

# React Basics
## What is React
-   React is a Javascript library created by Facebook and is used for building user interfaces (UIs) and front-end applications.
-   React is often called a framework because of its behaviour and capabilities.
-   React is the most popular framework in the industry (for now)

## Create React App
To create a new app, you may choose one of the following methods:

#### npx

```sh
npx create-react-app myapp
```
OR

#### npm

```sh
npm install create-react-app

create-react-app myapp
```
It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
myapp
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```
No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd myapp
```

Inside the newly created project, you can run some built-in commands:

### `npm start`
Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
Please install these extensions in visual studio code, these will really healp us in the development.
![](/gitimages/extensions.jpg)

## Components
A website consists of several comonents as shown below:

![](/gitimages/componentexamp.jpg)

Each componenets plays its own role.
In ReactJS **App.js** acts as the root components, and all other components will pe placed in the root component.

There are two types of components in React
1. Functional Component
2. Class Component

#### Functional Components
These components are purely presentational and are simply represented by a function that optionally takes props and returns a React element to be rendered to the page.
-   **Functional** because they are basically functions
-   **Stateless** because they do not hold and/or manage state
-   **Presentational** because all they do is output UI elements

Example:
```javascript
import React from 'react'
function FunctionalComponentExample() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}
export default FunctionalComponentExample
```
#### Class Components
These components are created using ES6’s class syntax. They have some additional features such as the ability to contain logic (for example methods that handle onClick events), local **state** and some other features.
-   **Class** because they are basically classes
-   **Smart** because they can contain logic
-   **Stateful** because they can hold and/or manage local state
Example:
```javascript
import React, { Component } from 'react'
class ClassComponentExample extends Component {
    render() {
        return (
            <div>
                <h1>Hello from Class Component</h1>
            </div>
        )
    }
}
export default ClassComponentExample

```
## Lifecycle
The three most useful lifecycle functions are **render** **componentDidMount** and **componentWillRecieveProps**
![](/gitimages/lifecycle.png)
## Props
props provide a way of passing properties/data down from one component to another, typically from a parent to a child component (unidirectional dataflow).

It’s important to note that props are **read-only** and that a component must never modify the props passed to it.

Example:

**Parent Component**
```javascript
    <div className="App">
        <ClassComponentExample myname="Fawad" />
        <FunctionalComponentExample myname="Fawad Bin Tariq" />
    </div>
```

**props in Class Component**
```javascript
import React, { Component } from 'react'
class ClassComponentExample extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.myname} from Class Component</h1>
            </div>
        )
    }
}
export default ClassComponentExample
```

**props in Functional Component**
```javascript
import React from 'react'
function FunctionalComponentExample(props) {
    return (
        <div>
            <h1>Hello {props.myname} from Functional Component!</h1>
        </div>
    )
}
export default FunctionalComponentExample
```

## state
State is the place where the data comes from.

Example:
```javascript
class ClassComponentExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello World'
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
            </>
        )
    }
}
export default ClassComponentExample
```
#### setState and Event handling
You can change value of state by using setState method.
Example:

```javascript
   constructor(props) {
        super(props)
    
        this.state = {
             counter: 0
        }
    }
    incrementOne = () =>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button type="button" onClick={this.incrementOne}>Increment</button>
            </>
        )
    }
```

If you call **setState** again and again in on request, it may not work, for that you need to pass previous state too.

Example:
```javascript
        this.setState(prevState=>({
            counter:prevState.counter+1
        }))
```

## Destructure Props and State
You can de structure **props** and **state** to get rid of **this.prop** or **this.state**

Example:
```javascript
  render() {
        const {myname} = this.props
        return (
            <>
                <p>{myname}</p>
            </>
        )
    }
```
## Forms
### Basic Form
```javascript
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
```

### Generic Form
Lets make a change handler that will work for everything, checkboxes, radio buttons, input types, text areas, select...
```javascript
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
```
```html
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
```
```javascript
        )
    }
}
export default FormExample
```
## Form Validations
```javascript
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
```

## Map-List Ilterations
In React, the **map** method used to traverse and display a list of similar objects of a component. A map is not the feature of React. Instead, it is the standard JavaScript function that could be called on any array. The map() method creates a new array by calling a provided function on every element in the calling array.

Example:
```javascript
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
```
## React Router

Since we’re building a web app, we’ll use react-router-dom. To use routing in react, you need to install react-router-dom first.

```bash npm install react-router-dom```

```javascript
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Post from './components/Post';
class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
```

##### Post.js
```javascript
function Post(props) {
    console.log(props)
    return (
        <h1> Post {props.match.params.id}</h1>
    )
}
export default Post
```
### Change Active class when path changes
```html
<li className={this.getNavLinkClass("/")}><NavLink to="/">Home</NavLink></li>
<li className={this.getNavLinkClass("/error")}><NavLink to="/error">404</NavLink></li>
```
```javascript
getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
}
```
```javascript
<Route path="/" component={NavBar} />
```

### Programming Redirects
to redirect form program use **history.push()** function.
Example
```javascript
setTimeout(()=>{
    this.props.history.push('/error')
},5000);
```

## Using Bootstrap or MaterializeCSS
To install bootstrap, run command ```npm install bootstrap``` OR to install materializecss run command ```npm install materialize-css@next```
Then include them in your project.
```import 'materialize-css/dist/css/materialize.min.css';```

# Redux
Install **redux** and **react-redux** and **redux-thunk**

![](/gitimages/redux.jpg)
![](/gitimages/redux2.jpg)
![](/gitimages/redux3.jpg)

```npm install redux``` and ```npm install react-redux``` and ```npm install redux-thunk```

OR directly in one command

```npm install redux react-redux redux-thunk```

##### Create Store
Create a new file named **Store.js** in **src** folder.

and use the following code

```javascript
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const initialState = {}
const middleWare = [thunk]
let store;

if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        ))
} else {
    store = createStore(rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare)))
}

export default store;
```
##### Root Reducer
Create a folder named **reducer** and create a new file **rootReducer.js** that will contain all the reducers.

```javascript
import {combineReducers} from 'redux'

export default combineReducers({

});
```

Now go to **App.js** and wrap all components with store **Provider**.
```javascript

import { Provider } from 'react-redux';
import store from './Store';

//AND

<Provider store={store}>
    //ALL COMPONENTS HERE
</Provider>
```
# Deployment
Before deployment, make sure to install **npm install react-app-polyfill** because react apps are not by default supported by IE.
and add
```
import 'react-app-polyfill/stable'
```
 in **App.js**
 
 Also, remove Redux extension code from ""store.js** and only use
```javascript
     store = createStore(rootReducer,
        initialState,
        compose(applyMiddleware(...middleWare)))
```

run command ```npm run build``` to get build copy of your project... deploy it on any web server
 
