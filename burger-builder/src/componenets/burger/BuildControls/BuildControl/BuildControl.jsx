import React from 'react';
import classes from './BuildControl.css'
const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less} onClick={props.ingredientRemove} disabled={props.lessDisabled}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdded}>More</button>
    </div>
)
export default BuildControl