import React,{Component} from 'react';

import Aux from '../../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})

    }

    sideDrawerToggleHandler = () => {
      // const currentSideDrawer = this.state.showSideDrawer

       this.setState((prevState) => (
           {showSideDrawer: !prevState.showSideDrawer}
       ));
    }
    render(){
        return  (
        <Aux>
            <Toolbar drawToggerClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>)
    }
}


export default Layout;