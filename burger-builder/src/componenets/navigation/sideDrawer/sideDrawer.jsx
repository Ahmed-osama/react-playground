import React  from 'react';
import classes from  './sideDrawer.css';
import NavigationItems from '../navigationItems/navigationItems';
import Logo from '../../logo/logo';

const SideDrawer = props => (
  <div className={classes.SideDrawer}>
    <Logo height={'11%'}/>
    <nav>
      <NavigationItems/>
    </nav>
  </div>
);
export default SideDrawer;
