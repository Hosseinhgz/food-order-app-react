import React from 'react';
import classes from './Cart.module.css'

const Cart = (props) => {
    const CART_ITEMS = [
        {id:'c1', name:'Sushi', price:12.99},
        {id:'c2', name:'Noodle', price:10.99},

    ]
    const cartItems = <ul className={classes['cart-items']}>
        {CART_ITEMS.map(item => {
                return(
                    <li>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </li>
                )
            })}
    </ul>
    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
};

export default Cart;