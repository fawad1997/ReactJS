# ReactJS
This README files contains basic information required to learn and create react app.
## Quick Links
-   [React Basics](#react-basics)
    -   [What is React](#what-is-react)
    -   [Create React App](#create-react-app)
    -   [Components](#components)
        -   [Functional Components](#functional-components)
        -   [Class Components](#class-components)
    -   [Props](#props)
    -   [State](#state)
    -   [Destructure Props and State](#destructure-props-and-state)
    -   [Forms](#forms)
        -   [Basic Form](#basic-form)
        -   [TextArea](#textarea)
        -   [Select Tag](#select-tag)
    -   [Map-List Ilterations](#map-list-ilterations)

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

### TextArea
Text areas work same as **input type="text"**
##### constructor and functions
```javascript
constructor(props) {
    super(props)
    this.state = {
            description:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
}
changeHandler = (event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })
}
handleSubmit(event) {
    alert('Description was ' + this.state.description);
    event.preventDefault();
    }
```
##### Form Html
```javascript
<form  onSubmit={this.handleSubmit}>
    <label>Description :</label>
    <textarea name="description" value={this.state.description} onChange={this.changeHandler}></textarea>
    <input type="submit" value="Submit" />
</form>
```
### Select Tag
##### constructor and functions
```javascript
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
```
##### html
```html
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
```
                    <label>Gender : </label>
                    <label><input type="radio" value={this.state.gender} checked={this.state.gender==='male'}></input>male</label>
                    <label><input type="radio" value={this.state.gender} checked={this.state.gender==='female'}></input>female</label><br/>
                    <label><input type="checkbox" onChange={this.changeHandler}></input>I agree with terms and conditions</label><br/>
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
