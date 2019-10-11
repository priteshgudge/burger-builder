import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Layout>
        {/*<BurgerBuilder />*/}
        {/*<Checkout/>*/}
        <Switch>
            <Route path="/checkout" exact component={Checkout}/>
            <Route path="/" exact component={BurgerBuilder}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
