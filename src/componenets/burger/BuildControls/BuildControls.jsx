import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Onion', type: 'onion' },
    { label: 'Tomato', type: 'tomato' },
    { label: 'Pickles', type: 'pickles' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const BuildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            <p>{'Total Price : '}<strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ctrl => (
                    <BuildControl
                        label={ctrl.label}
                        key={ctrl.label}
                        ingredientAdded={() => props.ingredientAdded(ctrl.type)}
                        ingredientRemove={() => props.ingredientRemove(ctrl.type)}
                        lessDisabled={props.lessDisabledTypes[ctrl.type]}
                    />
                ))
            }

        </div>
    )

}
export default BuildControls