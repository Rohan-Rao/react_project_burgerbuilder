import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';
const burgerControls = ( props ) => {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ]
    return(
        <div className={classes.BuildControls}>
             <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map( ctrl => <BurgerControl 
                                        key = {ctrl.label}
                                        label={ctrl.label} 
                                        added={() => props.addIngredient(ctrl.type)}
                                        remove = {() => props.removeIngredient(ctrl.type)}
                                        disableLessBtn = {props.disableLessBtn[ctrl.type]}
                                        />)}
            <button className={classes.OrderButton} disabled = {props.showOrderButton}>ORDER NOW</button>
        </div>
    )
} 

export default burgerControls;
