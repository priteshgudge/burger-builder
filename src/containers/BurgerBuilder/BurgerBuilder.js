import React,{Component} from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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

    }
    render(){
        const disabledInfo = {}
        for (let key in this.state.ingredients){
            disabledInfo[key] = this.state.ingredients[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    ingredients={this.ingredients}
                    disabledInfo={disabledInfo}/>
            </Aux>
            
        )
    }
}

export default BurgerBuilder;