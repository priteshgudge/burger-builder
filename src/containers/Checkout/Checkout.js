import React,{Component} from 'react';

import Route from 'react-router-dom';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

    state = {
        ingredients: {
            salad:1,
            bacon:1,
            cheese: 1,
            meat: 1,
        }
    }
    checkoutCancelledHandler = () =>{
        this.props.history.goBack()

    }
    checkoutContinuedHandler = () =>{
        this.props.history.replace("/checkout/contact-data")
    }

    componentDidMount() {

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries){
            ingredients[param[0]] = +param[1]
        }
    }

    render() {

        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.url.path  + "/contact-data"} component={ContactData}/>
            </div>
        )
    }
}

export default Checkout;
