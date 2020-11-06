import React, { Component } from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {
    render(){
         let inventoryArr = this.props.inventory.map((e, index) => {
             return <Product key={index} inventory={e} />
    })
    return <div>{inventoryArr}</div>
}   
}

export default Dashboard;