import React, { Component } from 'react';
import BurgerIngredient from './burgerIngredient/burgerIngredient'
import classes from './Burger.css'

class Burger extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let transformedIngredients = Object.keys(this.props.ingredients).map(type => {
            console.log(type)
            return [...Array(this.props.ingredients[type])].map((ingredient, i) => {
                return <BurgerIngredient key={type + '-' + i} type={type} />
            })
        }).reduce((arr, el) => {
            return [...arr, ...el]
        }, [])
        let ingredients = transformedIngredients.length > 0 ? transformedIngredients : <h3>{'Dude! your sandwich is empty'}</h3>
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                {ingredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        )
    }
}
export default Burger