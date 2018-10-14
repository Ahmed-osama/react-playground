import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import ToolBar from '../navigation/toolbar/toolbar';
import SideDrawer from '../navigation/sideDrawer/sideDrawer';

const layout = props => (
    <Aux>
        <ToolBar />
        <SideDrawer/>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)
export default layout