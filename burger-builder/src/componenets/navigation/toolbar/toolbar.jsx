import React from 'react';
import classes from './toolBar.css';
import Logo from '../../logo/logo';

const ToolBar = props => (
  <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo/>
      <nav>
        ...
      </nav>
  </header>
)
export default ToolBar