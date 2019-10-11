import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button'
class ContactData extends Component{

    state  = {
        name:'',
        email:'',
        address: {
            'street':'',
            'postalCode':''
        }
    }
    render(){

        return (
          <div>
              Enter Data
              <form>
                  <input type="text" name="name" placeholder="Your Name"/>
                  <input type="email" name="email" placeholder="Email"/>
                  <input type="text" name="street" placeholder="Street"/>
                  <input type="text" name="postalCode" placeholder="postal code"/>
                  <Button btnType="Success"> Order </Button>
              </form>
          </div>
        );

    }
}

export default ContactData;
