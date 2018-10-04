import React from 'react'
import classes from './backDrop.css'

const BackDrop = props=> (
    props.show? <div className={classes.backdrop} onClick={props.showHide}>

    </div> : null
)
export default BackDrop