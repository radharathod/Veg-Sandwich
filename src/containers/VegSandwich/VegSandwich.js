import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Sandwich from '../../components/Sandwich/Sandwich';
import MenuControl from '../../components/Sandwich/MenuControl/MenuControl';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Sandwich/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

const priceOfIngredient ={
    cabbage: 15,
    cucumber: 20,
    tomato: 5,
    cheese: 10
}

class VegSandwich extends Component {
    state = {
        vingredient: {
            cabbage: 0,
            cucumber: 0,
            tomato: 0,
            cheese: 0
        },
       price: 20,
       ordered: false,
       ordering: false,
       spLoading: false
    }

    updateOrderedState(vingredient) {
        const sum = Object.keys(vingredient).map(igKey =>{
            return vingredient[igKey];
        })
        .reduce((sum,el) =>{
            return sum + el;
        },0);
        this.setState({ordered: sum > 0});
    }

    addIngredientHandler = (types) => {
        const oldCount= this.state.vingredient[types];
        const newcount= oldCount + 1;
        const updatedIngredient= {...this.state.vingredient};
        updatedIngredient[types]= newcount;
        const addPrice= priceOfIngredient[types];
        const oldPrice= this.state.price;
        const newPrice= oldPrice + addPrice;
        this.setState({price: newPrice, vingredient:updatedIngredient});
        this.updateOrderedState(updatedIngredient); 
    }

    removeIngredientHandler =(types) => {
        const oldCount= this.state.vingredient[types];
        if(oldCount <= 0){
            return;
        }
        const newcount= oldCount - 1;
        const updatedIngredient= {
            ...this.state.vingredient
        }
        updatedIngredient[types]= newcount;
        const substractPrice= priceOfIngredient[types];
        const oldPrice= this.state.price;
        const newPrice= oldPrice - substractPrice;
        this.setState({price: newPrice, vingredient:updatedIngredient});
        this.updateOrderedState(updatedIngredient); 
    }

    orderHandler= () => {
        this.setState({ordering:true})
    }

    orderCancelHandler = () => {
        this.setState({ordering:false})
    }

    orderContinueHandler = () => {
       // alert('you can proceed');
       this.setState( { spLoading:true } );
       const order={
           ingredients:this.state.vingredient,
           TotalPrice: this.state.price,
           customer:{
               name:'ABC',
               address:{
                   country:'Norway'
               },
               email: 'abc@gmail.com'
           },
           deliveryMethod:'fastest'
       }
       axios.post('/orders.json',order)
       .then (response => {
           this.setState({ spLoading: false ,ordering: false});
       })
       .catch(error => {
            this.setState({ spLoading: false, ordering: false});
       });
    }
    render () {
        let orderSummary= <OrderSummary vingredient={this.state.vingredient}
        Price={this.state.price}
        continued={this.orderContinueHandler}
        cancel={this.orderCancelHandler}/>
        if(this.state.spLoading){
            orderSummary=<Spinner />;
        }

        return(
            <Aux>
                <Modal show={this.state.ordering} closeBackdrop={this.orderCancelHandler}>
                {orderSummary}
                </Modal>
                
                <Sandwich vingredient ={this.state.vingredient} />
                <MenuControl 
                addIngredient ={this.addIngredientHandler} 
                removeIngredient={this.removeIngredientHandler} 
                Ordered={this.state.ordered}
                showOrder={this.orderHandler}
                vsprice={this.state.price} />
            </Aux>
        );
    } 
        
}

export default ErrorHandler(VegSandwich,axios);