import React  from 'react';
import classes from  './sideDrawer.css';
import NavigationItems from '../navigationItems/navigationItems';
import Logo from '../../logo/logo';
import BackDrop from '../../ui/backdrop/backDrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = props => (
  <Aux>
    <BackDrop clicked={props.close}/>
    <div className={classes.SideDrawer}>
      <Logo height={'11%'}/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  </Aux>
);
export default SideDrawer;
