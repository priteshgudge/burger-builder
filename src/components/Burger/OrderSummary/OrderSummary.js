import React from 'react';
import Aux from '../../../hoc/Aux'
const orderSummary = (props) => {
    const ingredientSummary = Object.entries(props.ingredients).map(
        (key,value) => (<li key={key[0]}>
            <span 
                style={{"textTransform": 'capitalize'}}>{key[0]} </span>: {value}
            </li>)
    )
   return( 
      
    <Aux>
        <h3>Your Order</h3>
        <p> Delicious burger with ingredients</p>
        <ul>
            {ingredientSummary}
        </ul>
    </Aux>
   )
}

export default orderSummary;