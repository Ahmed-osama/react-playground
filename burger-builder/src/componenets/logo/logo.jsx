import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './logo.css'
const Logo = props =>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={burgerLogo} alt="burger builder" />
    </div>
)
export default Logo