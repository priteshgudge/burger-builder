import React,{Component} from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummmary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/Layout/UI/Modal/Modal'


import classes from './BurgerBuilder.module.css'

const BASE_PRICE = 4
const INGREDIENT_PRICES = {
    salad:2,
    bacon:3,
    cheese:4,
    meat:5,
}

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: BASE_PRICE,
        canPurchase: false,
        purchasing: false,
    }

    updatePurchaseState = (ingredients) => {
        const purchaseable = Object.values(ingredients).reduce((x,y) => x+y) > 0
        this.setState({canPurchase: purchaseable})
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true})
    }

    addIngredient = (type) => {
       const oldCount = this.state.ingredients[type];
       const updatedCount = oldCount + 1

       const updatedIngredients = {
           ...this.state.ingredients
       }
       updatedIngredients[type] = updatedCount
       const priceAddition = INGREDIENT_PRICES[type]
       const updatedPrice = this.state.totalPrice + priceAddition
       
       this.setState({ingredients:updatedIngredients})
       this.setState({totalPrice: updatedPrice})
       this.updatePurchaseState(updatedIngredients)
    }
    
    removeIngredient = (type) => {
       const oldCount = this.state.ingredients[type];
       if (oldCount <= 0){
           return "Cannot Update"
       }
       const updatedCount = oldCount - 1

       const updatedIngredients = {
           ...this.state.ingredients
       }
       updatedIngredients[type] = updatedCount
       const priceSubtraction = INGREDIENT_PRICES[type]
       const updatedPrice = this.state.totalPrice - priceSubtraction
       
       this.setState({ingredients:updatedIngredients})
       this.setState({totalPrice: updatedPrice})
       this.updatePurchaseState(updatedIngredients)

    }
    render(){
        const disabledInfo = {}
        for (let key in this.state.ingredients){
            disabledInfo[key] = this.state.ingredients[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummmary ingredients={this.state.ingredients}/>
                 </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    ingredients={this.state.ingredients}
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}/>
                <button className={classes.OrderButton} disabled={!this.state.canPurchase} onClick={this.purchaseHandler}>Order Now</button>
            </Aux>

            
        )
    }
}

export default BurgerBuilder;