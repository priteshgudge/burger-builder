import React,{Component} from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button';


class OrderSummary extends Component{

    componentWillUpdate(){
        console.log("[Order Summary] WillUpdate")
    }
    render(){
        const ingredientSummary = Object.entries(this.props.ingredients).map(
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
            <p><strong>Total Price:{this.props.price} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
       )
    }
}

export default OrderSummary;