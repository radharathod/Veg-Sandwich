import React from 'react';
import vegSandwich from '../../assets/Images/veg-sandwich.jpg';
import classes from './Logo.css';


const logo = (props) => (
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={vegSandwich} alt="veg sandwich"></img> 
    </div>
);

export default logo;