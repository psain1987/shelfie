import React from 'react';
import Product from '../Product/Product';


const Dashboard = (props) => {

    let inventoryArr = props.inventory.map()(
        <Product
        
        />
    )

    return(
        <div>
            This is the Dashboard
            
         </div>
        
    )
}

export default Dashboard;