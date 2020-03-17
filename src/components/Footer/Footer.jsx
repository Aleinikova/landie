import React from 'react';
import Button from '../ui-kit/Button/Button';
import { ReactComponent as Logo } from '../../assets/landie.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/youtube.svg';
import { ReactComponent as IntagramLogo } from '../../assets/instagram.svg';

import ButtonThem from './theme/Button.module.css';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.copyright}>©2019 UIX</div>
          <Logo className={styles.logo} />
          <Button theme={ButtonThem} isExtra={true}>Buy now</Button>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <span className={styles.link}>Home</span>
            </li>
            <li className={styles.navItem}>
              <span className={styles.link}>About</span>
            </li>
            <li className={styles.navItem}>
              <span className={styles.link}>Contact</span>
            </li>
          </ul>
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <FacebookLogo className={styles.socialLogo} />
            </li>
            <li className={styles.socialItem}>
              <LinkedinLogo className={styles.socialLogo} />
            </li>
            <li className={styles.socialItem}>
              <TwitterLogo className={styles.socialLogo} />
            </li>
            <li className={styles.socialItem}>
              <YoutubeLogo className={styles.socialLogo} />
            </li>
            <li className={styles.socialItem}>
              <IntagramLogo className={styles.socialLogo} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;