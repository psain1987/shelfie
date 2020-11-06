import React, {Component} from 'react'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: ['thing1', 'thing2', 'thing3']
    }
  }

  render(){
    return(
      <div>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
        <Header/>
      </div>
    )
  }   
}

export default App;
