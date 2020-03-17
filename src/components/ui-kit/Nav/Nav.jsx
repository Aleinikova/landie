import React from 'react';
import cn from 'classnames';
import styles from './Nav.module.css';

const Nav = ({ children, theme = {} }) => (
  <nav className={cn(styles.container, theme.container)}>
    <ul className={cn(styles.list, theme.list)}>
      {children}
    </ul>
  </nav>
);

export default Nav;