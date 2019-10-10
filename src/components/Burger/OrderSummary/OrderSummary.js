import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../Layout/UI/Button/Button';
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
        <p><strong>Total Price:{props.price} </strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
   )
}

export default orderSummary;