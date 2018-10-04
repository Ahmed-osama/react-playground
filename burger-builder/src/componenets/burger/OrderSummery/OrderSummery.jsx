import React from 'react';
import Aux from '../../../hoc/Aux'
import Btn from '../../ui/button/button'
const OrderSummery = props => {
    let ingredients = Object.keys(props.ingredientsSummery).map(key => <li key={key}> <span style={{ textTransform: 'capitalize' }}>{key}</span>{' : '}{props.ingredientsSummery[key]} </li>)
    return <Aux>
        <h3>Order Summer : </h3>
        <p>you ordered Burger with those ingredients</p>
        <ul>
            {ingredients}
        </ul>
        <Btn  btnType="Danger" clicked={props.cancel}>cancel</Btn>
        <Btn btnType="Success" clicked={props.confirm}>continue</Btn>
    </Aux>
}
export default OrderSummery