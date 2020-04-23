import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import NotFound from './components/NotFound';
import 'materialize-css/dist/css/materialize.min.css';
import ToDoApp from './components/toDoApp/ToDoApp';
import NavBar from './components/NavBar';
class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={ToDoApp} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
