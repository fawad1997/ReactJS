import React, {Component} from 'react';
import './App.css';
import ClassComponentExample from './components/ClassComponentExample';
import FunctionalComponentExample from './components/FunctionalComponentExample';

class App extends Component{
  render(){
    return (
      <div className="App">
        <ClassComponentExample myname="Fawad" />
        <FunctionalComponentExample myname="Fawad Bin Tariq" />
      </div>
    );
  }
}

export default App;
