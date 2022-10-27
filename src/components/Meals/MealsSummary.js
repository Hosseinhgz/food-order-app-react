import React from 'react';
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Amazing Food, Free Delivery!</h2>
            <p>Order the best quality food with the best
                price which is going to deliver to your home
            in less than 30 minutes</p>
        </section>
    );
}

export default MealsSummary;