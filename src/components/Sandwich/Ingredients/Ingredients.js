import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Ingredients.css';

class Ingredients extends Component {
    render() {
        let ingredient= null;
        switch(this.props.types) {
            case('bread-top'):
                ingredient= <div className={classes.BreadTop}></div>;
                break;
            case('cabbage'):
                ingredient= <div className={classes.Cabbage}></div>;
                break;
            case('cucumber'):
                ingredient= (
                <div className={classes.Cucumber}>
                    <div className={classes.Cucumber1}></div>
                    <div className={classes.Cucumber2}></div>
                    <div className={classes.Cucumber3}></div>
                </div>);
                break;
             case('tomato'):
                ingredient= (
                <div className={classes.Tomato}>
                    <div className={classes.Tomato1}></div>
                    <div className={classes.Tomato2}></div>
                </div>);
                break;
            case('cheese'):
                ingredient= <div className={classes.Cheese}></div>
                break;
            case('bread-bottom'):
                ingredient= <div className={classes.BreadBottom}></div>
                break;
            default:
                ingredient= null;
        }
        return ingredient;
    }
}

Ingredients.protoTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredients;