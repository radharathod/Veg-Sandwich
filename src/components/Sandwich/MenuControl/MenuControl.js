import React from 'react';
import classes from './MenuControl.css';
import OptionControl from '../../../components/Sandwich/MenuControl/OptionControl/OptionControl';

const opControl =[
    {options:'Cabbage:', types:'cabbage'},
    {options:'Cucumber:', types:'cucumber'},
    {options:'Tomato:', types:'tomato'},
    {options:'Cheese:', types:'cheese'}
   
]
const menuControl = (props) => (
    <div className={classes.MenuControl}>
        <p>Total Price={props.vsprice} Rs.</p>
        {opControl.map(ctrl =>(
            <OptionControl key={ctrl.options} options={ctrl.options}
            ingAdded={() =>props.addIngredient(ctrl.types)} 
            ingRemoved={() =>props.removeIngredient(ctrl.types)}/>
        ))}
        <button 
        className={classes.orderButton}
        disabled={!props.Ordered}
        onClick={props.showOrder}>ORDER</button>
    </div>
);

export default menuControl;