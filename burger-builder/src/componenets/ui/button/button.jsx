import React from 'react';
import classes from './button.css'
const Btn = props => (
    <button 
        className={[classes.Button, classes[props.btnType]].join(" ")}
        onClick={props.clicked}
    >
        {props.children}
    </button>
)
export default Btn