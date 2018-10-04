import React from 'react';
import classes from './toolBar.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';


const ToolBar = props => (
  <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo/>
      <nav>
        <NavigationItems />
      </nav>
  </header>
)
export default ToolBar