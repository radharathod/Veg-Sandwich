import React from 'react';
import classes from './OptionControl.css';


const optionControl = (props) => (
    <div className={classes.OptionControl}>
        <div>{props.options}</div>
        <button className={classes.Add} onClick={props.ingAdded}>Add</button>
        <button className={classes.Remove} onClick={props.ingRemoved}>Remove</button>
    </div>
);

export default optionControl;