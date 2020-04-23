import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import NotFound from './components/NotFound';
import 'materialize-css/dist/css/materialize.min.css';
class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
