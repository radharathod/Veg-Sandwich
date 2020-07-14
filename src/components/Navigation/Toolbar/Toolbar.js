import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import SDToggle from '../SideDrawer/SDToggle/SDToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SDToggle clicked={props.sdToggleClicked} />
       <div>Menu</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;