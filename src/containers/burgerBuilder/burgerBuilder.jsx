import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from './../../componenets/burger/Burger'
import BuildControls from './../../componenets/burger/BuildControls/BuildControls'
const INGREDIENTS_PRICES = {

    lettuce: 0.6,
    bacon: 0.2,
    onion: 0.3,
    tomato: 0.5,
    pickles: 0.7,
    cheese: 0.4,
    meat: 0.8
}
class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            onion: 0,
            tomato: 0,
            pickles: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2
    }
    addIngredientsHandler(type) {

        let oldCount = this.state.ingredients[type]
        let newCount = oldCount + 1
        let updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount

        let priceAddition = INGREDIENTS_PRICES[type]
        let oldPrice = this.state.totalPrice
        let newPrice = oldPrice + priceAddition
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }
    removeIngredientsHandler(type) {

        let oldCount = this.state.ingredients[type]
        let newCount = oldCount - 1
        if (newCount < 0) return
        let updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount

        let priceAddition = INGREDIENTS_PRICES[type]
        let oldPrice = this.state.totalPrice
        let newPrice = oldPrice - priceAddition
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientsHandler.bind(this)}
                    ingredientRemove={this.removeIngredientsHandler.bind(this)}
                    lessDisabledTypes={disabledInfo}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder