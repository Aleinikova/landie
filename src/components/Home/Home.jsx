import React from 'react';
import cn from 'classnames';
import { ReactComponent as BgSvg } from '../../assets/bg.svg';
import { ReactComponent as MainSvg } from '../../assets/main.svg';
import { ReactComponent as MessagesSvg } from '../../assets/messages.svg';
import { ReactComponent as LoginSvg } from '../../assets/login.svg';
import { ReactComponent as SocialInfluencersSvg } from '../../assets/social-influencers.svg';
import { ReactComponent as MentionSvg } from '../../assets/mention.svg';
import { ReactComponent as ConstructiongSvg } from '../../assets/constructing.svg'
import Button from '../ui-kit/Button/Button';

import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.container}>
      <section className={styles.firstScreen}>
        <div className={styles.block}>
          <h1 className={styles.title}>Introduce Your Product Quickly & Effectively</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className={styles.paragraph}>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim.
          </p>
          <div className={styles.buttonsRow}>
            <Button theme={{container: styles.buttonFirst }}>Purchase UI Kit</Button>
            <Button isOutline={true}>Learn More</Button>
          </div>
        </div>
        <MainSvg className={styles.mainSvg} />
        <div className={styles.bgWrapper}>
          <BgSvg className={styles.bg} />
        </div>
      </section>
      <section className={styles.screen}>
        <div className={styles.block}>
          <h2 className={styles.secondTitle}>Light, Fast & Powerful</h2>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim.
          </p>
          <div className={styles.properties}>
            <section className={styles.property}>
              <ConstructiongSvg className={styles.propertyImg} />
              <h3 className={styles.propertyTitle}>Title Goes Here</h3>
              <p className={styles.propertyDescription}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </section>
            <section className={styles.property}>
              <ConstructiongSvg className={styles.propertyImg} />
              <h3 className={styles.propertyTitle}>Title Goes Here</h3>
              <p className={styles.propertyDescription}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </section>
          </div>
        </div>
        <LoginSvg className={styles.screenImg} />
      </section>
      <section className={cn(styles.screen, styles.screenReverse)}>
        <div className={styles.block}>
          <h2 className={styles.secondTitle}>Light, Fast & Powerful</h2>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim.
          </p>
        </div>
        <MessagesSvg className={styles.screenImg} />
      </section>
      <section className={cn(styles.screen, styles.screenReverse)}>
        <div className={styles.block}>
          <h2 className={styles.secondTitle}>Light, Fast & Powerful</h2>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim.
          </p>
        </div>
        <SocialInfluencersSvg className={styles.screenImg} />
      </section>
      <section className={cn(styles.screen, styles.screenReverse)}>
        <div className={styles.block}>
          <h2 className={styles.secondTitle}>Light, Fast & Powerful</h2>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className={cn(styles.paragraph, styles.secondaryText)}>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim.
          </p>
          <Button theme={{container: styles.buttonExtraLearnMore}} isExtra={true}>Lear More</Button>
        </div>
        <MentionSvg className={styles.screenImg} />
      </section>
      <section className={styles.priceSection}>
        <BgSvg className={styles.priceBg} />
        <div className={styles.priceContainer}>
          <h2 className={styles.secondTitle}>A Price To Suit Everyone</h2>
          <p className={styles.paragraph}>
            Tiered pricing can get complicated. What do you get, what do you need,
            and what if you need to change? So we keep things simple..
          </p>
          <div className={styles.price}>
            <div className={styles.priceValue}>$40</div>
            <div className={styles.priceCondition}>UI Design Kit</div>
          </div>
          <div className={styles.infoText}>See, One price. Simple.</div>
          <Button isExtra={true}>Purchase Design Kit</Button>
        </div>
      </section>
    </main>
  )
};

export default Home;