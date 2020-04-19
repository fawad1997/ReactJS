import React, {Component} from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component{
  constructor(props) {
      super(props)
  
      this.state = {
           todos:[
               {
                   id:1,
                   title:'Do Exercise',
                   completed:false
               }, 
               {
                  id:2,
                  title:'Eat',
                  completed:false
              },
              {
                  id:3,
                  title:'Sleep',
                  completed:false
              }
           ]
      }
  }
  render(){
    return (
      <div className="App">
        <ToDo todo={this.state.todos}/>
      </div>
    );
  }
}

export default App;
