import React from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import ToolBar from '../navigation/toolbar/toolbar';

const layout = props => (
    <Aux>
        <ToolBar />
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)
export default layout