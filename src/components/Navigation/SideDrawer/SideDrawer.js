import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.css';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses =[classes.SideDrawer, classes.Close];
    if( props.open){
        attachedClasses =[classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div classes={attachedClasses.join(' ')}>
                <div className={classes.SideDrawer}>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavItems />
                    </nav>
                </div>
            </div>
        </Aux>
    );

};

export default sideDrawer;
