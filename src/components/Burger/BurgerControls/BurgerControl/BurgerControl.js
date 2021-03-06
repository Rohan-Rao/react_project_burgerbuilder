import React from 'react';
import classes from './BurgerControl.module.css';
const burgerControl = ( props ) => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.remove} disabled={props.disableLessBtn}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
}
export default burgerControl;