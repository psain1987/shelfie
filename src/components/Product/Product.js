import React from 'react';

const Product = (props) => {
    return(
        <div>This is the Product
            <h1>{props.index}</h1>
            <h2>{props.index}</h2>
            <h3>{props.index}</h3>
        </div>
        
    )
}

export default Product;