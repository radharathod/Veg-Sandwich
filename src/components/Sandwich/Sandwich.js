import React from 'react';
import classes from './Sandwich.css';
import Ingredients from './Ingredients/Ingredients';

const sandwich = (props) => {
    let transformedIngredient = Object.keys(props.vingredient) 
        .map(igKey => {
            return[...Array(props.vingredient[igKey])].map((_, i) => {
                return <Ingredients key ={igKey + i} types={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformedIngredient.length===0){
        transformedIngredient =<p>Please select the veggies:</p>
    }
    return(

        <div className={classes.Sandwich}>
            <h2>Veg-Sandwich</h2>
            <Ingredients types="bread-top"/>
            {transformedIngredient}
            <Ingredients types="bread-bottom"/>
        </div>
    );
};

export default sandwich;