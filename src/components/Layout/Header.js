import React from 'react';
import classes from './Header.module.css'
import foodImage from '../../assets/images/lily-banse--YHSwy6uqvk-unsplash.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header= (props) => {
    return (
        <>
           <header className={classes.header}>
               <h1>ReactMeals</h1>
               <HeaderCartButton onClick={props.onCartClicked}>
                   Cart
               </HeaderCartButton>
           </header>
           <div className={classes['main-image']}>
               <img src={foodImage} alt='Food bowls- by Lily Banse on Unsplash'/>
           </div>
        </>
    );
}

export default Header;