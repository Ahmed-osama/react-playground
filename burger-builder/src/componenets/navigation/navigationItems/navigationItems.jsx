import React  from 'react';
import classes from  './navigationItems.css';
import NavigationItem from './naviagtionItem/navigationItem';

const Nav = ['Burger Builder', 'Checkout']
const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        {
            Nav.map(item => <NavigationItem
                link={item}
                active
            >{item}
           </NavigationItem>)
        }
      
    </ul>
);

export default NavigationItems;
