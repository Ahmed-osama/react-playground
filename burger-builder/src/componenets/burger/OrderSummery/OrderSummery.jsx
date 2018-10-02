import React from 'react';
import Aux from '../../../hoc/Aux'
const OrderSummery = props => {
    let ingredients = Object.keys(props.ingredientsSummery).map(key => <li key={key}> <span style={{ textTransform: 'capitalize' }}>{key}</span>{' : '}{props.ingredientsSummery[key]} </li>)
    return <Aux>
        <h3>Order Summer : </h3>
        <p>you ordered Burger with those ingredients</p>
        <ul>
            {ingredients}
        </ul>
    </Aux>
}
export default OrderSummery