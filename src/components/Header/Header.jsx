import React, { useState } from 'react';
import cn from 'classnames';
import Nav from '../ui-kit/Nav/Nav';
import NavItem from '../ui-kit/Nav/NavItem';
import { ReactComponent as Logo } from '../../assets/landie.svg';
import Button from '../ui-kit/Button/Button';

import NavTheme from './theme/Nav.module.css';
import NavItemTheme from './theme/NavItem.module.css';
import ButtonTheme from './theme/Button.module.css';
import * as styles from './Header.module.css';

const Header = props => {
  const [ isMenuOpened, setIsMenuOpened ] = useState(false);
  const toggleMenu = () => {
    console.log('tooger');
    setIsMenuOpened(state => !state);
  };

  return (
    <header className={cn(styles.container, {[styles.containerMenuOpened]: isMenuOpened})}>
      <button
        className={styles.burgerMenu}
        onClick={toggleMenu}
      >
        <span className={styles.burgerMenuItem} />
        <span className={styles.burgerMenuItem} />
        <span className={styles.burgerMenuItem} />
      </button>
      <div className={styles.navWrapper}>
        <Nav theme={NavTheme}>
          <NavItem theme={NavItemTheme}><span className={styles.link}>Home</span></NavItem>
          <NavItem theme={NavItemTheme}><span className={styles.link}>About</span></NavItem>
          <NavItem theme={NavItemTheme}><span className={styles.link}>Contact</span></NavItem>
        </Nav>
      </div>
     <Logo className={styles.logo} />
     <Button theme={ButtonTheme} isExtra={true}>Purchase UI Kit</Button>
    </header>
  );
};

export default Header;