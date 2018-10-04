import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from './../../componenets/burger/Burger'
import BuildControls from './../../componenets/burger/BuildControls/BuildControls'
import Modal from './../../componenets/ui/modal/Modal'
import OrderSummery from './../../componenets/burger/OrderSummery/OrderSummery'
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
        totalPrice: 2,
        purchasable: false,
        purchased: false
    }

    updateIngredientsHandler(operation = "add", type) {
        let op = operation === 'add' ? 1 : -1
        let oldCount = this.state.ingredients[type]
        let newCount = oldCount + 1 * op
        if (newCount < 0) return
        let updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount

        let priceAddition = INGREDIENTS_PRICES[type]
        let oldPrice = this.state.totalPrice
        let newPrice = oldPrice + priceAddition * op
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
            purchasable: this.isPurchasable(updatedIngredients),
           
        })
    }
    isPurchasable(ingredients) {
        return Object.values(ingredients).some(el => el > 0)

    }
    purchaseHandler(){
        this.setState({
            purchased : true
        })
    }
    cancelHandler(){
        this.setState({
            purchased : false
        })
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let { totalPrice, purchasable } = this.state
        return (
            <Aux>
                <Modal show={this.state.purchased} cancelHandler={this.cancelHandler.bind(this)}>
                    <OrderSummery ingredientsSummery={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.updateIngredientsHandler.bind(this, 'add')}
                    ingredientRemove={this.updateIngredientsHandler.bind(this, 'min')}
                    lessDisabledTypes={disabledInfo}
                    price={totalPrice}
                    purchasable={purchasable}
                    ordered={this.purchaseHandler.bind(this)}
                />
            </Aux>
        )
    }
}
export default BurgerBuilder