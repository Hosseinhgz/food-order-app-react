import React from 'react';
import classes from './Header.module.css'
import foodImage from '../../assets/images/lily-banse--YHSwy6uqvk-unsplash.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header= (props) => {
    return (
        <>
           <header className={classes.header}>
               <h1>ReactMeals</h1>
               <HeaderCartButton>Cart</HeaderCartButton>
           </header>
           <div className={classes['main-image']}>
               <img src={foodImage} alt='Food bowls- Photo by Lily Banse on Unsplash</a>
   '/>
           </div>
        </>
    );
}

export default Header;