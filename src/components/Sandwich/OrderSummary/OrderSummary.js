import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import classes from './OrderSummary.css';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingSummary = Object.keys(this.props.vingredient)
        .map(igKey => {
            return (<li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.vingredient[igKey]}</li>);
        });
        return(
        <Aux>
            <div className={classes.OrderSummary}>
            <p>Your Order Is</p>
            <ul>{ingSummary}</ul>
            <p>Total Price={this.props.Price}</p>
            <button className={classes.red} onClick={this.props.continued}>Continue</button>
            <button className={classes.green} onClick={this.props.cancel}>Cancel</button>
            </div>
        </Aux>
        );
    }
}

export default OrderSummary;