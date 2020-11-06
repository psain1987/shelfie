import React, { Component } from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            imgUrl: '',
        }
    }

    handleChangeOne = (e) => {
        this.setState({ name: e.target.value})
    }

    handleChangeTwo = (e) => {
        this.setState({ price: e.target.value})
    }

    handleChangeThree = (e) => {
        this.setState({ imgUrl: e.target.value})
    }

    

    render(){

        return(
            <div>This is the Form
                <input value={this.state.name} onChange={this.handleChangeOne}></input>
                <input value={this.state.price} onChange={this.handleChangeTwo}></input>
                <input value={this.state.imgUrl} onChange={this.handleChangeThree}></input>

                <button onClick=''>Cancel</button>
                <button>Add to Inventory</button>
        </div>
        )
    }
}

export default Form;