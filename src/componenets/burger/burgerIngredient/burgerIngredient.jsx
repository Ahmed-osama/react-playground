import React, { Component } from 'react'
import classes from './burgerIngredient.css'
import propTypes from 'prop-types'
class BurgerIngredient extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('onion'):
                ingredient = <div className={classes.Onion}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ('tomato'):
                ingredient = <div className={classes.Tomato}></div>;
                break;
            case ('pickles'):
                ingredient = (
                    <div className={classes.Pickles}>
                        <div className={classes.Pickle1}></div>
                        <div className={classes.Pickle2}></div>
                    </div>
                )
                break;
            case ('lettuce'):
                ingredient = <div className={classes.Lettuce}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }


}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
}
export default BurgerIngredient