import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('./api/inventory')
    .then(res => {
      this.setState({ inventory: res.data})
    })
    .catch(err => console.log(err))
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
