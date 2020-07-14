import React from 'react';
import classes from './SDToggle.css';

const sdToggle = (props) => (
    <div className={classes.SDToggle } onClick={props.clicked}> 
    <div></div>
    <div></div>
    <div></div>
    </div>
);

export default sdToggle;