import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
};

export default App;