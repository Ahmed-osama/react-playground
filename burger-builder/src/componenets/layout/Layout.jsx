import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import ToolBar from '../navigation/toolbar/toolbar';
import SideDrawer from '../navigation/sideDrawer/sideDrawer';

class layout extends Component  {
    state = {
        showSideDrawer : true
    }
    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer : false
        })
    }
    sideDrawerToggleHandler = () => {
        this.setState(prevstate => {
           return {showSideDrawer : !prevstate.showSideDrawer} 
        })
    }
    render(){
        return (
        <Aux>
            <ToolBar  drawerToggleClicked = {this.sideDrawerToggleHandler} />
            <SideDrawer 
                closed={this.sideDrawerClosedHandler}
                open={this.state.showSideDrawer}
            />
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>)
    }
}
   
export default layout